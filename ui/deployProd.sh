npm install && ng build --prod --base-href prod && aws s3 sync dist/ s3://hdd-ui/ --acl public-read
