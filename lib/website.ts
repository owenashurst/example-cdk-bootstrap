#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');
import s3deploy = require('@aws-cdk/aws-s3-deployment');
import { Construct } from '@aws-cdk/core';

export interface WebsiteProps {
    domainName: string
}

export class Website extends Construct {
    constructor(parent: Construct, id: string, props: WebsiteProps) {
        super(parent, id);

        const siteBucket = new s3.Bucket(this, 'bucket', {
            bucketName: props.domainName,
            websiteIndexDocument: 'index.html',
            websiteErrorDocument: 'index.html',
            publicReadAccess: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY
        });

        new s3deploy.BucketDeployment(this, 'deployment', {
            sources: [ s3deploy.Source.asset('./website/dist') ],
            destinationBucket: siteBucket
        });
    }
}