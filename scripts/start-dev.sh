#!/bin/bash
# Wrapper script that starts the dev server in a fully detached way.
# Traps common kill signals so the server survives shell cleanup.
trap '' HUP TERM INT
cd /home/z/my-project
export NEXT_TELEMETRY_DISABLED=1
export NODE_OPTIONS="--max-old-space-size=1536"
exec node ./node_modules/.bin/next dev -p 3000
