#!/bin/sh

echo "Check that we have env vars"
test -n "$NEXT_PUBLIC_STRAPI_API"

find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_NEXT_PUBLIC_STRAPI_API#$NEXT_PUBLIC_STRAPI_API#g"

echo "Starting Nextjs"
exec "$@"