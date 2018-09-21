#! /bin/sh

### BEGIN INIT INFO
# Provides:
# Required-Start:
# Required-Stop:
# Default-Start:        2 3 4 5
# Default-Stop:
# Short-Description:    User script to auto startup the server
### END INIT INFO

# Some things that run always
touch /var/lock/server-auto-startup

# Carry out specific functions when asked to by the system
case "$1" in
  start)
    echo "Starting the server..."
    pm2 start "/home/linaro/Documents/Coding/ecosystem.config.json"
    ;;
  stop)
    echo "Stopping the server..."
    pm2 kill
    ;;
  *)
    echo "Usage: /etc/init.d/server-auto-startup {start|stop}"
    exit 1
    ;;
esac

exit 0
