import { Amplify } from "aws-amplify";

const amplifyConfig = {
    Analytics: {
        Pinpoint:{
            appId: "",
            region: "us-east-1",
        },
    },
}

 Amplify.configure(amplifyConfig)