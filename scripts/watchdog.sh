#!/bin/bash
# Lightweight watchdog: restarts the dev server if it dies.
# Checks every 10s. Avoids duplicate instances by killing any
# existing next-server before starting a fresh one.
cd /home/z/my-project
export NEXT_TELEMETRY_DISABLED=1
export NODE_OPTIONS="--max-old-space-size=1740"

while true; do
  # Check if next-server is running AND listening on port 3000
  if ! pgrep -f "next-server" >/dev/null 2>&1; then
    # Server is down — start a fresh instance
    pkill -f "next dev" 2>/dev/null
    sleep 1
    nohup node ./node_modules/.bin/next dev -p 3000 >/home/z/my-project/dev.log 2>&1 </dev/null &
    disown
    # Wait for it to be ready before checking again
    sleep 15
  fi
  sleep 10
done
