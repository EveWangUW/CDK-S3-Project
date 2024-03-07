import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket, EventType} from 'aws-cdk-lib/aws-s3'; 
import { Construct } from 'constructs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //L1 and L2 construct of an S3 bucket
    const level1S3Bucket = new CfnBucket(this,'MyFirstLevelConstructBucket',{
      versioningConfiguration:{
        status: "Enabled"
      }
    });

    const level2S3Bucket = new Bucket(this,'MyFirstLevl2ConstructBucket',{
      //removalPolicy:cdk.RemovalPolicy.DESTROY,
      bucketName:"eviesfirstbucket1012",
      versioned: true
    });
  }

  //how to link a s3 put event to a sqs queue using cdk and typescript
  
}