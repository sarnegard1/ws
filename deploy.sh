lein run && \
pushd blog && \
s3cmd sync . s3://saraharnegard.com
