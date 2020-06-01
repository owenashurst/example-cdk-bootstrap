#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ExampleCdkBootstrapStack } from '../lib/example-cdk-bootstrap-stack';

const app = new cdk.App();
new ExampleCdkBootstrapStack(app, 'ExampleCdkBootstrapStack');
