import * as cdk from '@aws-cdk/core';
import { Website } from './website';

export class ExampleCdkBootstrapStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new Website(this, 'website', {
      domainName: 'example-cdk-bootstrap-issue'
    });
  }
}
