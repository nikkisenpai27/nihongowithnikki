#!/bin/bash
# Auto-restart dev server watchdog — starts server, restarts if it dies
trap '' HUP TERM INT
cd /home/z/my-project
export NEXT_TELEMETRY_DISABLED=1
export NODE_OPTIONS="--max-old-space-size=1536"

while true; do
  # Kill any existing server first
  pkill -9 -f "next-server" 2>/dev/null
  pkill -9 -f "next dev" 2>/dev/null
  sleep 2
  
  # Start fresh server
  node ./node_modules/.bin/next dev -p 3000 > /home/z/my-project/dev.log 2>&1 &
  SRVPID=$!
  
  # Wait for it to be ready (max 30s)
  for i in $(seq 1 30); do
    sleep 1
    if curl -s -o /dev/null --max-time 2 http://localhost:3000/ 2>/dev/null; then
      echo "Server ready (pid $SRVPID)" >> /home/z/my-project/watchdog.log
      break
    fi
  done
  
  # Wait for server to die
  wait $SRVPID 2>/dev/null
  echo "Server died at $(date), restarting in 3s..." >> /home/z/my-project/watchdog.log
  sleep 3
done
