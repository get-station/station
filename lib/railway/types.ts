export default {
    "scalars": [
        1,
        2,
        10,
        12,
        13,
        14,
        15,
        17,
        19,
        23,
        32,
        33,
        34,
        36,
        40,
        45,
        47,
        50,
        55,
        73,
        83,
        88,
        99,
        101,
        102,
        110,
        112,
        118,
        120,
        121,
        134,
        147,
        148,
        185,
        194,
        203,
        249,
        252,
        255,
        260,
        261,
        263,
        274,
        285,
        288,
        292,
        293,
        294,
        295,
        296,
        310,
        319,
        329,
        332,
        336,
        337,
        343,
        345,
        346,
        352,
        380,
        381,
        383,
        391,
        392,
        395
    ],
    "types": {
        "AccessRule": {
            "disallowed": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ActiveFeatureFlag": {},
        "ActiveServiceFeatureFlag": {},
        "AdoptionInfo": {
            "adoptionLevel": [
                88
            ],
            "createdAt": [
                36
            ],
            "customer": [
                299
            ],
            "deltaLevel": [
                88
            ],
            "id": [
                99
            ],
            "matchedIcpEmail": [
                288
            ],
            "monthlyEstimatedUsage": [
                88
            ],
            "numConfigFile": [
                102
            ],
            "numCronSchedule": [
                102
            ],
            "numDeploys": [
                102
            ],
            "numEnvs": [
                102
            ],
            "numFailedDeploys": [
                102
            ],
            "numHealthcheck": [
                102
            ],
            "numIconConfig": [
                102
            ],
            "numRegion": [
                102
            ],
            "numReplicas": [
                102
            ],
            "numRootDirectory": [
                102
            ],
            "numSeats": [
                102
            ],
            "numServices": [
                102
            ],
            "numSupportRequests": [
                102
            ],
            "numVariables": [
                102
            ],
            "numWatchPatterns": [
                102
            ],
            "totalCores": [
                88
            ],
            "totalDisk": [
                88
            ],
            "totalNetwork": [
                88
            ],
            "updatedAt": [
                36
            ],
            "__typename": [
                288
            ]
        },
        "AggregatedUsage": {
            "measurement": [
                120
            ],
            "tags": [
                122
            ],
            "value": [
                88
            ],
            "__typename": [
                288
            ]
        },
        "AllDomains": {
            "customDomains": [
                24
            ],
            "serviceDomains": [
                269
            ],
            "__typename": [
                288
            ]
        },
        "ApiToken": {
            "displayToken": [
                288
            ],
            "id": [
                99
            ],
            "name": [
                288
            ],
            "teamId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ApiTokenCreateInput": {
            "name": [
                288
            ],
            "teamId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "BanReasonHistory": {
            "actor": [
                350
            ],
            "banReason": [
                288
            ],
            "createdAt": [
                36
            ],
            "id": [
                99
            ],
            "__typename": [
                288
            ]
        },
        "BaseEnvironmentOverrideInput": {
            "baseEnvironmentOverrideId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "BigInt": {},
        "BillingPeriod": {
            "end": [
                36
            ],
            "start": [
                36
            ],
            "__typename": [
                288
            ]
        },
        "Boolean": {},
        "Builder": {},
        "CDNProvider": {},
        "CanvasConfig": {},
        "CertificatePublicData": {
            "domainNames": [
                288
            ],
            "expiresAt": [
                36
            ],
            "fingerprintSha256": [
                288
            ],
            "issuedAt": [
                36
            ],
            "keyType": [
                112
            ],
            "__typename": [
                288
            ]
        },
        "CertificateStatus": {},
        "CnameCheck": {
            "link": [
                288
            ],
            "message": [
                288
            ],
            "status": [
                19
            ],
            "__typename": [
                288
            ]
        },
        "CnameCheckStatus": {},
        "Container": {
            "createdAt": [
                36
            ],
            "deletedAt": [
                36
            ],
            "environment": [
                62
            ],
            "environmentId": [
                288
            ],
            "id": [
                99
            ],
            "migratedAt": [
                36
            ],
            "plugin": [
                142
            ],
            "pluginId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Credit": {
            "amount": [
                88
            ],
            "createdAt": [
                36
            ],
            "customerId": [
                288
            ],
            "id": [
                99
            ],
            "memo": [
                288
            ],
            "type": [
                23
            ],
            "updatedAt": [
                36
            ],
            "__typename": [
                288
            ]
        },
        "CreditTransferMetrics": {
            "creditTransferAvg": [
                88
            ],
            "creditTransferCount": [
                102
            ],
            "creditTransferSum": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "CreditType": {},
        "CustomDomain": {
            "cnameCheck": [
                18
            ],
            "createdAt": [
                36
            ],
            "deletedAt": [
                36
            ],
            "domain": [
                288
            ],
            "environmentId": [
                288
            ],
            "id": [
                99
            ],
            "projectId": [
                288
            ],
            "serviceId": [
                288
            ],
            "status": [
                26
            ],
            "targetPort": [
                102
            ],
            "updatedAt": [
                36
            ],
            "__typename": [
                288
            ]
        },
        "CustomDomainCreateInput": {
            "domain": [
                288
            ],
            "environmentId": [
                288
            ],
            "projectId": [
                288
            ],
            "serviceId": [
                288
            ],
            "targetPort": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "CustomDomainStatus": {
            "cdnProvider": [
                14
            ],
            "certificateStatus": [
                17
            ],
            "certificates": [
                16
            ],
            "dnsRecords": [
                35
            ],
            "__typename": [
                288
            ]
        },
        "Customer": {
            "appliedCredits": [
                88
            ],
            "billingEmail": [
                288
            ],
            "billingPeriod": [
                11
            ],
            "creditBalance": [
                88
            ],
            "credits": [
                28,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "defaultPaymentMethod": [
                138
            ],
            "defaultPaymentMethodId": [
                288
            ],
            "id": [
                99
            ],
            "invoices": [
                30
            ],
            "isPrepaying": [
                12
            ],
            "isTrialing": [
                12
            ],
            "isUsageSubscriber": [
                12
            ],
            "isWithdrawingToCredits": [
                12
            ],
            "planLimitOverride": [
                140
            ],
            "remainingUsageCreditBalance": [
                88
            ],
            "state": [
                295
            ],
            "stripeCustomerId": [
                288
            ],
            "subscriptions": [
                31
            ],
            "teamId": [
                288
            ],
            "usageLimit": [
                347
            ],
            "userId": [
                288
            ],
            "workspace": [
                396
            ],
            "__typename": [
                288
            ]
        },
        "CustomerCreditsConnection": {
            "edges": [
                29
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "CustomerCreditsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                21
            ],
            "__typename": [
                288
            ]
        },
        "CustomerInvoice": {
            "amountPaid": [
                88
            ],
            "hostedURL": [
                288
            ],
            "invoiceId": [
                288
            ],
            "items": [
                291
            ],
            "paymentIntentStatus": [
                288
            ],
            "pdfURL": [
                288
            ],
            "periodEnd": [
                288
            ],
            "periodStart": [
                288
            ],
            "status": [
                288
            ],
            "subscriptionId": [
                288
            ],
            "total": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "CustomerSubscription": {
            "billingCycleAnchor": [
                36
            ],
            "cancelAt": [
                288
            ],
            "cancelAtPeriodEnd": [
                12
            ],
            "couponId": [
                288
            ],
            "discounts": [
                290
            ],
            "id": [
                288
            ],
            "items": [
                291
            ],
            "latestInvoiceId": [
                288
            ],
            "nextInvoiceCurrentTotal": [
                102
            ],
            "nextInvoiceDate": [
                288
            ],
            "status": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "DNSRecordPurpose": {},
        "DNSRecordStatus": {},
        "DNSRecordType": {},
        "DNSRecords": {
            "currentValue": [
                288
            ],
            "fqdn": [
                288
            ],
            "hostlabel": [
                288
            ],
            "purpose": [
                32
            ],
            "recordType": [
                34
            ],
            "requiredValue": [
                288
            ],
            "status": [
                33
            ],
            "zone": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "DateTime": {},
        "Deployment": {
            "canRedeploy": [
                12
            ],
            "canRollback": [
                12
            ],
            "createdAt": [
                36
            ],
            "creator": [
                350
            ],
            "deploymentStopped": [
                12
            ],
            "environment": [
                62
            ],
            "environmentId": [
                288
            ],
            "id": [
                99
            ],
            "meta": [
                47
            ],
            "projectId": [
                288
            ],
            "service": [
                264
            ],
            "serviceId": [
                288
            ],
            "snapshotId": [
                288
            ],
            "sockets": [
                49
            ],
            "staticUrl": [
                288
            ],
            "status": [
                50
            ],
            "suggestAddServiceDomain": [
                12
            ],
            "updatedAt": [
                36
            ],
            "url": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "DeploymentEvent": {
            "completedAt": [
                36
            ],
            "createdAt": [
                36
            ],
            "id": [
                99
            ],
            "payload": [
                39
            ],
            "step": [
                40
            ],
            "__typename": [
                288
            ]
        },
        "DeploymentEventPayload": {
            "error": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "DeploymentEventStep": {},
        "DeploymentInstanceExecution": {
            "completedAt": [
                36
            ],
            "createdAt": [
                36
            ],
            "deploymentId": [
                288
            ],
            "deploymentMeta": [
                47
            ],
            "id": [
                99
            ],
            "status": [
                45
            ],
            "updatedAt": [
                36
            ],
            "__typename": [
                288
            ]
        },
        "DeploymentInstanceExecutionCreateInput": {
            "serviceInstanceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "DeploymentInstanceExecutionInput": {
            "deploymentId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "DeploymentInstanceExecutionListInput": {
            "environmentId": [
                288
            ],
            "serviceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "DeploymentInstanceStatus": {},
        "DeploymentListInput": {
            "environmentId": [
                288
            ],
            "includeDeleted": [
                12
            ],
            "projectId": [
                288
            ],
            "serviceId": [
                288
            ],
            "status": [
                51
            ],
            "__typename": [
                288
            ]
        },
        "DeploymentMeta": {},
        "DeploymentSnapshot": {
            "createdAt": [
                36
            ],
            "id": [
                99
            ],
            "updatedAt": [
                36
            ],
            "variables": [
                73
            ],
            "__typename": [
                288
            ]
        },
        "DeploymentSocket": {
            "ipv6": [
                12
            ],
            "port": [
                102
            ],
            "processName": [
                288
            ],
            "updatedAt": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "DeploymentStatus": {},
        "DeploymentStatusInput": {
            "in": [
                50
            ],
            "notIn": [
                50
            ],
            "__typename": [
                288
            ]
        },
        "DeploymentTrigger": {
            "baseEnvironmentOverrideId": [
                288
            ],
            "branch": [
                288
            ],
            "checkSuites": [
                12
            ],
            "environmentId": [
                288
            ],
            "id": [
                99
            ],
            "projectId": [
                288
            ],
            "provider": [
                288
            ],
            "repository": [
                288
            ],
            "serviceId": [
                288
            ],
            "validCheckSuites": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "DeploymentTriggerCreateInput": {
            "branch": [
                288
            ],
            "checkSuites": [
                12
            ],
            "environmentId": [
                288
            ],
            "projectId": [
                288
            ],
            "provider": [
                288
            ],
            "repository": [
                288
            ],
            "rootDirectory": [
                288
            ],
            "serviceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "DeploymentTriggerUpdateInput": {
            "branch": [
                288
            ],
            "checkSuites": [
                12
            ],
            "repository": [
                288
            ],
            "rootDirectory": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "DisplayConfig": {},
        "Domain": {
            "createdAt": [
                36
            ],
            "deletedAt": [
                36
            ],
            "domain": [
                288
            ],
            "environmentId": [
                288
            ],
            "id": [
                99
            ],
            "projectId": [
                288
            ],
            "serviceId": [
                288
            ],
            "targetPort": [
                102
            ],
            "updatedAt": [
                36
            ],
            "on_CustomDomain": [
                24
            ],
            "on_ServiceDomain": [
                269
            ],
            "__typename": [
                288
            ]
        },
        "DomainAvailable": {
            "available": [
                12
            ],
            "message": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "DomainWithStatus": {
            "cdnProvider": [
                14
            ],
            "certificateStatus": [
                17
            ],
            "certificates": [
                16
            ],
            "dnsRecords": [
                35
            ],
            "domain": [
                56
            ],
            "__typename": [
                288
            ]
        },
        "EgressGateway": {
            "ipv4": [
                288
            ],
            "region": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "EgressGatewayCreateInput": {
            "environmentId": [
                288
            ],
            "region": [
                288
            ],
            "serviceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "EgressGatewayServiceTargetInput": {
            "environmentId": [
                288
            ],
            "serviceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Environment": {
            "createdAt": [
                36
            ],
            "deletedAt": [
                36
            ],
            "deploymentTriggers": [
                64,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "deployments": [
                66,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "id": [
                99
            ],
            "isEphemeral": [
                12
            ],
            "meta": [
                68
            ],
            "name": [
                288
            ],
            "projectId": [
                288
            ],
            "serviceInstances": [
                70,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "sourceEnvironment": [
                62
            ],
            "unmergedChangesCount": [
                102
            ],
            "updatedAt": [
                36
            ],
            "variables": [
                74,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "volumeInstances": [
                76,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentCreateInput": {
            "ephemeral": [
                12
            ],
            "name": [
                288
            ],
            "projectId": [
                288
            ],
            "skipInitialDeploys": [
                12
            ],
            "sourceEnvironmentId": [
                288
            ],
            "stageInitialChanges": [
                12
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentDeploymentTriggersConnection": {
            "edges": [
                65
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentDeploymentTriggersConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                52
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentDeploymentsConnection": {
            "edges": [
                67
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentDeploymentsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                37
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentMeta": {
            "baseBranch": [
                288
            ],
            "branch": [
                288
            ],
            "prCommentId": [
                102
            ],
            "prNumber": [
                102
            ],
            "prRepo": [
                288
            ],
            "prTitle": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentRenameInput": {
            "name": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentServiceInstancesConnection": {
            "edges": [
                71
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentServiceInstancesConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                273
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentTriggersDeployInput": {
            "environmentId": [
                288
            ],
            "projectId": [
                288
            ],
            "serviceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentVariables": {},
        "EnvironmentVariablesConnection": {
            "edges": [
                75
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentVariablesConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                368
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentVolumeInstancesConnection": {
            "edges": [
                77
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "EnvironmentVolumeInstancesConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                377
            ],
            "__typename": [
                288
            ]
        },
        "Errors": {
            "errors": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "EstimatedUsage": {
            "estimatedValue": [
                88
            ],
            "measurement": [
                120
            ],
            "projectId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Event": {
            "action": [
                288
            ],
            "createdAt": [
                36
            ],
            "environment": [
                62
            ],
            "environmentId": [
                288
            ],
            "id": [
                99
            ],
            "object": [
                288
            ],
            "payload": [
                110
            ],
            "project": [
                161
            ],
            "projectId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "EventBatchTrackInput": {
            "events": [
                85
            ],
            "__typename": [
                288
            ]
        },
        "EventFilterInput": {
            "action": [
                84
            ],
            "object": [
                84
            ],
            "__typename": [
                288
            ]
        },
        "EventProperties": {},
        "EventStringListFilter": {
            "in": [
                288
            ],
            "notIn": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "EventTrackInput": {
            "eventName": [
                288
            ],
            "properties": [
                83
            ],
            "ts": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ExplicitOwnerInput": {
            "id": [
                288
            ],
            "type": [
                260
            ],
            "__typename": [
                288
            ]
        },
        "FeatureFlagToggleInput": {
            "flag": [
                1
            ],
            "__typename": [
                288
            ]
        },
        "Float": {},
        "GitHubAccess": {
            "hasAccess": [
                12
            ],
            "isPublic": [
                12
            ],
            "__typename": [
                288
            ]
        },
        "GitHubBranch": {
            "name": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "GitHubRepo": {
            "defaultBranch": [
                288
            ],
            "fullName": [
                288
            ],
            "id": [
                102
            ],
            "installationId": [
                288
            ],
            "isPrivate": [
                12
            ],
            "name": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "GitHubRepoDeployInput": {
            "branch": [
                288
            ],
            "projectId": [
                288
            ],
            "repo": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "GitHubRepoUpdateInput": {
            "environmentId": [
                288
            ],
            "projectId": [
                288
            ],
            "serviceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "GitHubRepoWithoutInstallation": {
            "defaultBranch": [
                288
            ],
            "fullName": [
                288
            ],
            "id": [
                102
            ],
            "isPrivate": [
                12
            ],
            "name": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "HelpStationFormInput": {
            "isPrivate": [
                12
            ],
            "message": [
                288
            ],
            "subject": [
                288
            ],
            "topic": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "HerokuApp": {
            "id": [
                288
            ],
            "name": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "HerokuImportVariablesInput": {
            "environmentId": [
                288
            ],
            "herokuAppId": [
                288
            ],
            "projectId": [
                288
            ],
            "serviceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "HttpLog": {
            "clientUa": [
                288
            ],
            "deploymentId": [
                288
            ],
            "deploymentInstanceId": [
                288
            ],
            "downstreamProto": [
                288
            ],
            "edgeRegion": [
                288
            ],
            "host": [
                288
            ],
            "httpStatus": [
                102
            ],
            "method": [
                288
            ],
            "path": [
                288
            ],
            "requestId": [
                288
            ],
            "responseDetails": [
                288
            ],
            "rxBytes": [
                102
            ],
            "srcIp": [
                288
            ],
            "timestamp": [
                288
            ],
            "totalDuration": [
                102
            ],
            "txBytes": [
                102
            ],
            "upstreamAddress": [
                288
            ],
            "upstreamProto": [
                288
            ],
            "upstreamRqDuration": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "ID": {},
        "Incident": {
            "id": [
                288
            ],
            "message": [
                288
            ],
            "status": [
                101
            ],
            "url": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "IncidentStatus": {},
        "Int": {},
        "Integration": {
            "config": [
                110
            ],
            "id": [
                99
            ],
            "name": [
                288
            ],
            "projectId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "IntegrationAuth": {
            "id": [
                99
            ],
            "integrations": [
                105,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "provider": [
                288
            ],
            "providerId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "IntegrationAuthIntegrationsConnection": {
            "edges": [
                106
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "IntegrationAuthIntegrationsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                103
            ],
            "__typename": [
                288
            ]
        },
        "IntegrationCreateInput": {
            "config": [
                110
            ],
            "integrationAuthId": [
                288
            ],
            "name": [
                288
            ],
            "projectId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "IntegrationUpdateInput": {
            "config": [
                110
            ],
            "integrationAuthId": [
                288
            ],
            "name": [
                288
            ],
            "projectId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "InviteCode": {
            "code": [
                288
            ],
            "createdAt": [
                36
            ],
            "id": [
                99
            ],
            "project": [
                161
            ],
            "projectId": [
                288
            ],
            "role": [
                185
            ],
            "__typename": [
                288
            ]
        },
        "JSON": {},
        "JobApplicationCreateInput": {
            "email": [
                288
            ],
            "jobId": [
                288
            ],
            "name": [
                288
            ],
            "why": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "KeyType": {},
        "Log": {
            "attributes": [
                114
            ],
            "message": [
                288
            ],
            "severity": [
                288
            ],
            "tags": [
                115
            ],
            "timestamp": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "LogAttribute": {
            "key": [
                288
            ],
            "value": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "LogTags": {
            "deploymentId": [
                288
            ],
            "deploymentInstanceId": [
                288
            ],
            "environmentId": [
                288
            ],
            "pluginId": [
                288
            ],
            "projectId": [
                288
            ],
            "serviceId": [
                288
            ],
            "snapshotId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "LoginSessionAuthInput": {
            "code": [
                288
            ],
            "hostname": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Maintenance": {
            "id": [
                288
            ],
            "message": [
                288
            ],
            "status": [
                118
            ],
            "url": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "MaintenanceStatus": {},
        "Metric": {
            "ts": [
                102
            ],
            "value": [
                88
            ],
            "__typename": [
                288
            ]
        },
        "MetricMeasurement": {},
        "MetricTag": {},
        "MetricTags": {
            "deploymentId": [
                288
            ],
            "environmentId": [
                288
            ],
            "pluginId": [
                288
            ],
            "projectId": [
                288
            ],
            "serviceId": [
                288
            ],
            "volumeId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "MetricsResult": {
            "measurement": [
                120
            ],
            "tags": [
                122
            ],
            "values": [
                119
            ],
            "__typename": [
                288
            ]
        },
        "MissingCommandAlertInput": {
            "page": [
                288
            ],
            "text": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Mutation": {
            "apiTokenCreate": [
                288,
                {
                    "input": [
                        7,
                        "ApiTokenCreateInput!"
                    ]
                }
            ],
            "apiTokenDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "baseEnvironmentOverride": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        9,
                        "BaseEnvironmentOverrideInput!"
                    ]
                }
            ],
            "customDomainCreate": [
                24,
                {
                    "input": [
                        25,
                        "CustomDomainCreateInput!"
                    ]
                }
            ],
            "customDomainDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "customDomainUpdate": [
                12,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "id": [
                        288,
                        "String!"
                    ],
                    "targetPort": [
                        102
                    ]
                }
            ],
            "customerMigrateToHobbyPlan": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "customerTogglePayoutsToCredits": [
                12,
                {
                    "customerId": [
                        288,
                        "String!"
                    ],
                    "input": [
                        398,
                        "customerTogglePayoutsToCreditsInput!"
                    ]
                }
            ],
            "deploymentApprove": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "deploymentCancel": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "deploymentInstanceExecutionCreate": [
                12,
                {
                    "input": [
                        42,
                        "DeploymentInstanceExecutionCreateInput!"
                    ]
                }
            ],
            "deploymentRedeploy": [
                37,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "usePreviousImageTag": [
                        12
                    ]
                }
            ],
            "deploymentRemove": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "deploymentRestart": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "deploymentRollback": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "deploymentStop": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerCreate": [
                52,
                {
                    "input": [
                        53,
                        "DeploymentTriggerCreateInput!"
                    ]
                }
            ],
            "deploymentTriggerDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerUpdate": [
                52,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        54,
                        "DeploymentTriggerUpdateInput!"
                    ]
                }
            ],
            "dockerComposeImport": [
                78,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ],
                    "yaml": [
                        288,
                        "String!"
                    ]
                }
            ],
            "egressGatewayAssociationCreate": [
                59,
                {
                    "input": [
                        60,
                        "EgressGatewayCreateInput!"
                    ]
                }
            ],
            "egressGatewayAssociationsClear": [
                12,
                {
                    "input": [
                        61,
                        "EgressGatewayServiceTargetInput!"
                    ]
                }
            ],
            "emailChangeConfirm": [
                12,
                {
                    "nonce": [
                        288,
                        "String!"
                    ]
                }
            ],
            "emailChangeInitiate": [
                12,
                {
                    "newEmail": [
                        288,
                        "String!"
                    ]
                }
            ],
            "environmentCreate": [
                62,
                {
                    "input": [
                        63,
                        "EnvironmentCreateInput!"
                    ]
                }
            ],
            "environmentDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "environmentRename": [
                62,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        69,
                        "EnvironmentRenameInput!"
                    ]
                }
            ],
            "environmentTriggersDeploy": [
                12,
                {
                    "input": [
                        72,
                        "EnvironmentTriggersDeployInput!"
                    ]
                }
            ],
            "eventBatchTrack": [
                12,
                {
                    "input": [
                        81,
                        "EventBatchTrackInput!"
                    ]
                }
            ],
            "eventTrack": [
                12,
                {
                    "input": [
                        85,
                        "EventTrackInput!"
                    ]
                }
            ],
            "fairUseAgree": [
                12,
                {
                    "agree": [
                        12,
                        "Boolean!"
                    ]
                }
            ],
            "featureFlagAdd": [
                12,
                {
                    "input": [
                        87,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "featureFlagRemove": [
                12,
                {
                    "input": [
                        87,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "githubRepoDeploy": [
                12,
                {
                    "input": [
                        92,
                        "GitHubRepoDeployInput!"
                    ]
                }
            ],
            "githubRepoUpdate": [
                12,
                {
                    "input": [
                        93,
                        "GitHubRepoUpdateInput!"
                    ]
                }
            ],
            "helpStationCreateThread": [
                288,
                {
                    "input": [
                        95,
                        "HelpStationFormInput!"
                    ]
                }
            ],
            "herokuImportVariables": [
                102,
                {
                    "input": [
                        97,
                        "HerokuImportVariablesInput!"
                    ]
                }
            ],
            "hobbyToTeamDenyMigration": [
                12,
                {
                    "teamId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "hobbyToTeamMigrate": [
                12,
                {
                    "teamId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "integrationCreate": [
                103,
                {
                    "input": [
                        107,
                        "IntegrationCreateInput!"
                    ]
                }
            ],
            "integrationDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "integrationUpdate": [
                103,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        108,
                        "IntegrationUpdateInput!"
                    ]
                }
            ],
            "inviteCodeUse": [
                161,
                {
                    "code": [
                        288,
                        "String!"
                    ]
                }
            ],
            "jobApplicationCreate": [
                12,
                {
                    "input": [
                        111,
                        "JobApplicationCreateInput!"
                    ],
                    "resume": [
                        343,
                        "Upload!"
                    ]
                }
            ],
            "loginSessionAuth": [
                12,
                {
                    "input": [
                        116,
                        "LoginSessionAuthInput!"
                    ]
                }
            ],
            "loginSessionCancel": [
                12,
                {
                    "code": [
                        288,
                        "String!"
                    ]
                }
            ],
            "loginSessionConsume": [
                288,
                {
                    "code": [
                        288,
                        "String!"
                    ]
                }
            ],
            "loginSessionCreate": [
                288
            ],
            "loginSessionVerify": [
                12,
                {
                    "code": [
                        288,
                        "String!"
                    ]
                }
            ],
            "logout": [
                12
            ],
            "missingCommandAlert": [
                12,
                {
                    "input": [
                        124,
                        "MissingCommandAlertInput!"
                    ]
                }
            ],
            "observabilityDashboardCreate": [
                12,
                {
                    "input": [
                        128,
                        "ObservabilityDashboardCreateInput!"
                    ]
                }
            ],
            "observabilityDashboardReset": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "observabilityDashboardUpdate": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        135,
                        "[ObservabilityDashboardUpdateInput!]!"
                    ]
                }
            ],
            "pluginCreate": [
                142,
                {
                    "input": [
                        145,
                        "PluginCreateInput!"
                    ]
                }
            ],
            "pluginDelete": [
                12,
                {
                    "environmentId": [
                        288
                    ],
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "pluginReset": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        258,
                        "ResetPluginInput!"
                    ]
                }
            ],
            "pluginResetCredentials": [
                288,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        257,
                        "ResetPluginCredentialsInput!"
                    ]
                }
            ],
            "pluginRestart": [
                142,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        146,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginStart": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        146,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginUpdate": [
                142,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        149,
                        "PluginUpdateInput!"
                    ]
                }
            ],
            "preferenceOverridesCreateUpdate": [
                12,
                {
                    "input": [
                        153,
                        "PreferenceOverridesCreateUpdateData!"
                    ]
                }
            ],
            "preferenceOverridesDestroyForResource": [
                12,
                {
                    "input": [
                        154,
                        "PreferenceOverridesDestroyData!"
                    ]
                }
            ],
            "preferencesUpdate": [
                155,
                {
                    "input": [
                        156,
                        "PreferencesUpdateData!"
                    ]
                }
            ],
            "privateNetworkCreateOrGet": [
                157,
                {
                    "input": [
                        158,
                        "PrivateNetworkCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointCreateOrGet": [
                159,
                {
                    "input": [
                        160,
                        "PrivateNetworkEndpointCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointRename": [
                12,
                {
                    "dnsName": [
                        288,
                        "String!"
                    ],
                    "id": [
                        288,
                        "String!"
                    ],
                    "privateNetworkId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "privateNetworksForEnvironmentDelete": [
                12,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectClaim": [
                161,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectCreate": [
                161,
                {
                    "input": [
                        162,
                        "ProjectCreateInput!"
                    ]
                }
            ],
            "projectDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectInvitationAccept": [
                179,
                {
                    "code": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectInvitationCreate": [
                172,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        175,
                        "ProjectInvitee!"
                    ]
                }
            ],
            "projectInvitationDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectInvitationResend": [
                172,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectInviteUser": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        174,
                        "ProjectInviteUserInput!"
                    ]
                }
            ],
            "projectLeave": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectMemberRemove": [
                176,
                {
                    "input": [
                        177,
                        "ProjectMemberRemoveInput!"
                    ]
                }
            ],
            "projectMemberUpdate": [
                176,
                {
                    "input": [
                        178,
                        "ProjectMemberUpdateInput!"
                    ]
                }
            ],
            "projectTokenCreate": [
                288,
                {
                    "input": [
                        189,
                        "ProjectTokenCreateInput!"
                    ]
                }
            ],
            "projectTokenDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectTransferConfirm": [
                12,
                {
                    "input": [
                        190,
                        "ProjectTransferConfirmInput!"
                    ]
                }
            ],
            "projectTransferInitiate": [
                12,
                {
                    "input": [
                        191,
                        "ProjectTransferInitiateInput!"
                    ]
                }
            ],
            "projectTransferToTeam": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        192,
                        "ProjectTransferToTeamInput!"
                    ]
                }
            ],
            "projectTransferToUser": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectUpdate": [
                161,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        193,
                        "ProjectUpdateInput!"
                    ]
                }
            ],
            "providerAuthRemove": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "recoveryCodeGenerate": [
                245
            ],
            "recoveryCodeValidate": [
                12,
                {
                    "input": [
                        244,
                        "RecoveryCodeValidateInput!"
                    ]
                }
            ],
            "referralInfoUpdate": [
                246,
                {
                    "input": [
                        247,
                        "ReferralInfoUpdateInput!"
                    ]
                }
            ],
            "sendCommunityThreadNotificationEmail": [
                12,
                {
                    "input": [
                        262,
                        "SendCommunityThreadNotificationEmailInput!"
                    ]
                }
            ],
            "serviceConnect": [
                264,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        265,
                        "ServiceConnectInput!"
                    ]
                }
            ],
            "serviceCreate": [
                264,
                {
                    "input": [
                        266,
                        "ServiceCreateInput!"
                    ]
                }
            ],
            "serviceDelete": [
                12,
                {
                    "environmentId": [
                        288
                    ],
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "serviceDisconnect": [
                264,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "serviceDomainCreate": [
                269,
                {
                    "input": [
                        270,
                        "ServiceDomainCreateInput!"
                    ]
                }
            ],
            "serviceDomainDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "serviceDomainUpdate": [
                12,
                {
                    "input": [
                        271,
                        "ServiceDomainUpdateInput!"
                    ]
                }
            ],
            "serviceFeatureFlagAdd": [
                12,
                {
                    "input": [
                        272,
                        "ServiceFeatureFlagToggleInput!"
                    ]
                }
            ],
            "serviceFeatureFlagRemove": [
                12,
                {
                    "input": [
                        272,
                        "ServiceFeatureFlagToggleInput!"
                    ]
                }
            ],
            "serviceInstanceDeploy": [
                12,
                {
                    "commitSha": [
                        288
                    ],
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "latestCommit": [
                        12
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceDeployV2": [
                288,
                {
                    "commitSha": [
                        288
                    ],
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimitsUpdate": [
                12,
                {
                    "input": [
                        275,
                        "ServiceInstanceLimitsUpdateInput!"
                    ]
                }
            ],
            "serviceInstanceRedeploy": [
                12,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceUpdate": [
                12,
                {
                    "environmentId": [
                        288
                    ],
                    "input": [
                        276,
                        "ServiceInstanceUpdateInput!"
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "serviceRemoveUpstreamUrl": [
                264,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "serviceUpdate": [
                264,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        283,
                        "ServiceUpdateInput!"
                    ]
                }
            ],
            "sessionDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "sharedVariableConfigure": [
                368,
                {
                    "input": [
                        286,
                        "SharedVariableConfigureInput!"
                    ]
                }
            ],
            "tcpProxyCreate": [
                297,
                {
                    "input": [
                        298,
                        "TCPProxyCreateInput!"
                    ]
                }
            ],
            "tcpProxyDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "teamBulkProjectTransfer": [
                12,
                {
                    "input": [
                        300,
                        "TeamBulkProjectTransferInput!"
                    ]
                }
            ],
            "teamCreate": [
                299,
                {
                    "input": [
                        303,
                        "TeamCreateInput!"
                    ]
                }
            ],
            "teamCreateAndSubscribe": [
                302,
                {
                    "input": [
                        301,
                        "TeamCreateAndSubscribeInput!"
                    ]
                }
            ],
            "teamDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "teamInviteCodeCreate": [
                288,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        304,
                        "TeamInviteCodeCreateInput!"
                    ]
                }
            ],
            "teamInviteCodeUse": [
                299,
                {
                    "code": [
                        288,
                        "String!"
                    ]
                }
            ],
            "teamLeave": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "teamPermissionChange": [
                12,
                {
                    "input": [
                        307,
                        "TeamPermissionChangeInput!"
                    ]
                }
            ],
            "teamTrustedDomainCreate": [
                12,
                {
                    "input": [
                        312,
                        "TeamTrustedDomainCreateInput!"
                    ]
                }
            ],
            "teamTrustedDomainDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "teamUpdate": [
                299,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        313,
                        "TeamUpdateInput!"
                    ]
                }
            ],
            "teamUserInvite": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        314,
                        "TeamUserInviteInput!"
                    ]
                }
            ],
            "teamUserRemove": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        315,
                        "TeamUserRemoveInput!"
                    ]
                }
            ],
            "telemetrySend": [
                12,
                {
                    "input": [
                        316,
                        "TelemetrySendInput!"
                    ]
                }
            ],
            "templateClone": [
                317,
                {
                    "input": [
                        318,
                        "TemplateCloneInput!"
                    ]
                }
            ],
            "templateDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        321,
                        "TemplateDeleteInput!"
                    ]
                }
            ],
            "templateDeploy": [
                323,
                {
                    "input": [
                        322,
                        "TemplateDeployInput!"
                    ]
                }
            ],
            "templateDeployV2": [
                323,
                {
                    "input": [
                        325,
                        "TemplateDeployV2Input!"
                    ]
                }
            ],
            "templateGenerate": [
                317,
                {
                    "input": [
                        326,
                        "TemplateGenerateInput!"
                    ]
                }
            ],
            "templateMaybeUnsetCommunityThreadSlug": [
                12,
                {
                    "communityThreadSlug": [
                        288,
                        "String!"
                    ]
                }
            ],
            "templatePublish": [
                317,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        330,
                        "TemplatePublishInput!"
                    ]
                }
            ],
            "templateServiceSourceEject": [
                12,
                {
                    "input": [
                        333,
                        "TemplateServiceSourceEjectInput!"
                    ]
                }
            ],
            "templateUnpublish": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "twoFactorInfoCreate": [
                245,
                {
                    "input": [
                        340,
                        "TwoFactorInfoCreateInput!"
                    ]
                }
            ],
            "twoFactorInfoDelete": [
                12
            ],
            "twoFactorInfoSecret": [
                341
            ],
            "twoFactorInfoValidate": [
                12,
                {
                    "input": [
                        342,
                        "TwoFactorInfoValidateInput!"
                    ]
                }
            ],
            "upsertSlackChannelForTeam": [
                12,
                {
                    "teamId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "usageLimitRemove": [
                12,
                {
                    "input": [
                        348,
                        "UsageLimitRemoveInput!"
                    ]
                }
            ],
            "usageLimitSet": [
                12,
                {
                    "input": [
                        349,
                        "UsageLimitSetInput!"
                    ]
                }
            ],
            "userBetaLeave": [
                12
            ],
            "userDelete": [
                12
            ],
            "userDiscordDisconnect": [
                12
            ],
            "userFlagsRemove": [
                12,
                {
                    "input": [
                        353,
                        "UserFlagsRemoveInput!"
                    ]
                }
            ],
            "userFlagsSet": [
                12,
                {
                    "input": [
                        354,
                        "UserFlagsSetInput!"
                    ]
                }
            ],
            "userProfileUpdate": [
                12,
                {
                    "input": [
                        360,
                        "UserProfileUpdateInput!"
                    ]
                }
            ],
            "userSlackDisconnect": [
                12
            ],
            "userTermsUpdate": [
                350
            ],
            "userUpdate": [
                350,
                {
                    "input": [
                        367,
                        "UserUpdateInput!"
                    ]
                }
            ],
            "variableCollectionUpsert": [
                12,
                {
                    "input": [
                        369,
                        "VariableCollectionUpsertInput!"
                    ]
                }
            ],
            "variableDelete": [
                12,
                {
                    "input": [
                        370,
                        "VariableDeleteInput!"
                    ]
                }
            ],
            "variableUpsert": [
                12,
                {
                    "input": [
                        371,
                        "VariableUpsertInput!"
                    ]
                }
            ],
            "volumeCreate": [
                375,
                {
                    "input": [
                        376,
                        "VolumeCreateInput!"
                    ]
                }
            ],
            "volumeDelete": [
                12,
                {
                    "volumeId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupCreate": [
                393,
                {
                    "volumeInstanceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupDelete": [
                393,
                {
                    "volumeInstanceBackupId": [
                        288,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupLock": [
                12,
                {
                    "volumeInstanceBackupId": [
                        288,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupRestore": [
                393,
                {
                    "volumeInstanceBackupId": [
                        288,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupScheduleUpdate": [
                12,
                {
                    "kinds": [
                        380,
                        "[VolumeInstanceBackupScheduleKind!]!"
                    ],
                    "volumeInstanceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceUpdate": [
                12,
                {
                    "environmentId": [
                        288
                    ],
                    "input": [
                        382,
                        "VolumeInstanceUpdateInput!"
                    ],
                    "volumeId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "volumeUpdate": [
                375,
                {
                    "input": [
                        384,
                        "VolumeUpdateInput!"
                    ],
                    "volumeId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "webhookCreate": [
                197,
                {
                    "input": [
                        387,
                        "WebhookCreateInput!"
                    ]
                }
            ],
            "webhookDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "webhookUpdate": [
                197,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        388,
                        "WebhookUpdateInput!"
                    ]
                }
            ],
            "workspaceDelete": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "workspaceLeave": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "workspaceUpdate": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "input": [
                        397,
                        "WorkspaceUpdateInput!"
                    ]
                }
            ],
            "workspaceUpsertSlackChannel": [
                12,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                288
            ]
        },
        "Node": {
            "id": [
                99
            ],
            "on_AdoptionInfo": [
                3
            ],
            "on_ApiToken": [
                6
            ],
            "on_BanReasonHistory": [
                8
            ],
            "on_Container": [
                20
            ],
            "on_Credit": [
                21
            ],
            "on_Customer": [
                27
            ],
            "on_Deployment": [
                37
            ],
            "on_DeploymentEvent": [
                38
            ],
            "on_DeploymentInstanceExecution": [
                41
            ],
            "on_DeploymentSnapshot": [
                48
            ],
            "on_DeploymentTrigger": [
                52
            ],
            "on_Environment": [
                62
            ],
            "on_Event": [
                80
            ],
            "on_Integration": [
                103
            ],
            "on_IntegrationAuth": [
                104
            ],
            "on_InviteCode": [
                109
            ],
            "on_ObservabilityDashboard": [
                127
            ],
            "on_ObservabilityDashboardItem": [
                129
            ],
            "on_ObservabilityDashboardItemInstance": [
                133
            ],
            "on_PlanLimitOverride": [
                140
            ],
            "on_Plugin": [
                142
            ],
            "on_PreferenceOverride": [
                152
            ],
            "on_Preferences": [
                155
            ],
            "on_Project": [
                161
            ],
            "on_ProjectPermission": [
                179
            ],
            "on_ProjectToken": [
                188
            ],
            "on_ProjectWebhook": [
                197
            ],
            "on_ProviderAuth": [
                200
            ],
            "on_ReferralInfo": [
                246
            ],
            "on_RefundRequest": [
                251
            ],
            "on_Service": [
                264
            ],
            "on_ServiceInstance": [
                273
            ],
            "on_Session": [
                284
            ],
            "on_Team": [
                299
            ],
            "on_TeamPermission": [
                306
            ],
            "on_TeamTrustedDomain": [
                311
            ],
            "on_Template": [
                317
            ],
            "on_TemplateService": [
                331
            ],
            "on_UsageAnomaly": [
                344
            ],
            "on_UsageLimit": [
                347
            ],
            "on_User": [
                350
            ],
            "on_Variable": [
                368
            ],
            "on_Volume": [
                375
            ],
            "on_VolumeInstance": [
                377
            ],
            "on_VolumeInstanceBackupSchedule": [
                379
            ],
            "on_Withdrawal": [
                389
            ],
            "on_WithdrawalAccount": [
                390
            ],
            "on_Workspace": [
                396
            ],
            "__typename": [
                288
            ]
        },
        "ObservabilityDashboard": {
            "id": [
                99
            ],
            "items": [
                133
            ],
            "__typename": [
                288
            ]
        },
        "ObservabilityDashboardCreateInput": {
            "environmentId": [
                288
            ],
            "items": [
                135
            ],
            "__typename": [
                288
            ]
        },
        "ObservabilityDashboardItem": {
            "config": [
                130
            ],
            "description": [
                288
            ],
            "id": [
                99
            ],
            "name": [
                288
            ],
            "type": [
                134
            ],
            "__typename": [
                288
            ]
        },
        "ObservabilityDashboardItemConfig": {
            "logsFilter": [
                288
            ],
            "measurements": [
                120
            ],
            "projectUsageProperties": [
                194
            ],
            "resourceIds": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ObservabilityDashboardItemConfigInput": {
            "logsFilter": [
                288
            ],
            "measurements": [
                120
            ],
            "projectUsageProperties": [
                194
            ],
            "resourceIds": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ObservabilityDashboardItemCreateInput": {
            "config": [
                131
            ],
            "description": [
                288
            ],
            "id": [
                288
            ],
            "name": [
                288
            ],
            "type": [
                134
            ],
            "__typename": [
                288
            ]
        },
        "ObservabilityDashboardItemInstance": {
            "dashboardItem": [
                129
            ],
            "displayConfig": [
                55
            ],
            "id": [
                99
            ],
            "__typename": [
                288
            ]
        },
        "ObservabilityDashboardItemType": {},
        "ObservabilityDashboardUpdateInput": {
            "dashboardItem": [
                132
            ],
            "displayConfig": [
                55
            ],
            "id": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "OverrideInput": {
            "enabled": [
                12
            ],
            "name": [
                288
            ],
            "resource": [
                288
            ],
            "resourceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "PageInfo": {
            "endCursor": [
                288
            ],
            "hasNextPage": [
                12
            ],
            "hasPreviousPage": [
                12
            ],
            "startCursor": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "PaymentMethod": {
            "card": [
                139
            ],
            "id": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "PaymentMethodCard": {
            "brand": [
                288
            ],
            "country": [
                288
            ],
            "last4": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "PlanLimitOverride": {
            "config": [
                293
            ],
            "id": [
                99
            ],
            "__typename": [
                288
            ]
        },
        "PlatformStatus": {
            "incident": [
                100
            ],
            "isStable": [
                12
            ],
            "maintenance": [
                117
            ],
            "__typename": [
                288
            ]
        },
        "Plugin": {
            "containers": [
                143,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "createdAt": [
                36
            ],
            "deletedAt": [
                36
            ],
            "deprecatedAt": [
                36
            ],
            "friendlyName": [
                288
            ],
            "id": [
                99
            ],
            "logsEnabled": [
                12
            ],
            "migrationDatabaseServiceId": [
                288
            ],
            "name": [
                148
            ],
            "project": [
                161
            ],
            "status": [
                147
            ],
            "variables": [
                150,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "__typename": [
                288
            ]
        },
        "PluginContainersConnection": {
            "edges": [
                144
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "PluginContainersConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                20
            ],
            "__typename": [
                288
            ]
        },
        "PluginCreateInput": {
            "environmentId": [
                288
            ],
            "friendlyName": [
                288
            ],
            "name": [
                288
            ],
            "projectId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "PluginRestartInput": {
            "environmentId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "PluginStatus": {},
        "PluginType": {},
        "PluginUpdateInput": {
            "friendlyName": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "PluginVariablesConnection": {
            "edges": [
                151
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "PluginVariablesConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                368
            ],
            "__typename": [
                288
            ]
        },
        "PreferenceOverride": {
            "enabled": [
                12
            ],
            "id": [
                99
            ],
            "name": [
                288
            ],
            "resource": [
                288
            ],
            "resourceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "PreferenceOverridesCreateUpdateData": {
            "overrides": [
                136
            ],
            "__typename": [
                288
            ]
        },
        "PreferenceOverridesDestroyData": {
            "resource": [
                288
            ],
            "resourceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Preferences": {
            "buildFailedEmail": [
                12
            ],
            "changelogEmail": [
                12
            ],
            "communityEmail": [
                12
            ],
            "deployCrashedEmail": [
                12
            ],
            "ephemeralEnvironmentEmail": [
                12
            ],
            "id": [
                99
            ],
            "marketingEmail": [
                12
            ],
            "preferenceOverrides": [
                152
            ],
            "subprocessorUpdatesEmail": [
                12
            ],
            "usageEmail": [
                12
            ],
            "__typename": [
                288
            ]
        },
        "PreferencesUpdateData": {
            "buildFailedEmail": [
                12
            ],
            "changelogEmail": [
                12
            ],
            "communityEmail": [
                12
            ],
            "deployCrashedEmail": [
                12
            ],
            "ephemeralEnvironmentEmail": [
                12
            ],
            "marketingEmail": [
                12
            ],
            "subprocessorUpdatesEmail": [
                12
            ],
            "token": [
                288
            ],
            "usageEmail": [
                12
            ],
            "__typename": [
                288
            ]
        },
        "PrivateNetwork": {
            "createdAt": [
                36
            ],
            "deletedAt": [
                36
            ],
            "dnsName": [
                288
            ],
            "environmentId": [
                288
            ],
            "name": [
                288
            ],
            "networkId": [
                10
            ],
            "projectId": [
                288
            ],
            "publicId": [
                288
            ],
            "tags": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "PrivateNetworkCreateOrGetInput": {
            "environmentId": [
                288
            ],
            "name": [
                288
            ],
            "projectId": [
                288
            ],
            "tags": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "PrivateNetworkEndpoint": {
            "createdAt": [
                36
            ],
            "deletedAt": [
                36
            ],
            "dnsName": [
                288
            ],
            "privateIps": [
                288
            ],
            "publicId": [
                288
            ],
            "serviceInstanceId": [
                288
            ],
            "tags": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "PrivateNetworkEndpointCreateOrGetInput": {
            "environmentId": [
                288
            ],
            "privateNetworkId": [
                288
            ],
            "serviceId": [
                288
            ],
            "serviceName": [
                288
            ],
            "tags": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Project": {
            "baseEnvironment": [
                62
            ],
            "baseEnvironmentId": [
                288
            ],
            "botPrEnvironments": [
                12
            ],
            "createdAt": [
                36
            ],
            "deletedAt": [
                36
            ],
            "deploymentTriggers": [
                164,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "deployments": [
                166,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "description": [
                288
            ],
            "environments": [
                168,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "expiredAt": [
                36
            ],
            "groups": [
                170,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "id": [
                99
            ],
            "isPublic": [
                12
            ],
            "isTempProject": [
                12
            ],
            "members": [
                176
            ],
            "name": [
                288
            ],
            "plugins": [
                180,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "prDeploys": [
                12
            ],
            "prEnvCopyVolData": [
                12
            ],
            "projectPermissions": [
                182,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "services": [
                186,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "subscriptionPlanLimit": [
                293
            ],
            "subscriptionType": [
                294
            ],
            "team": [
                299
            ],
            "teamId": [
                288
            ],
            "updatedAt": [
                36
            ],
            "volumes": [
                195,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "webhooks": [
                198,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "__typename": [
                288
            ]
        },
        "ProjectCreateInput": {
            "defaultEnvironmentName": [
                288
            ],
            "description": [
                288
            ],
            "isPublic": [
                12
            ],
            "name": [
                288
            ],
            "plugins": [
                288
            ],
            "prDeploys": [
                12
            ],
            "repo": [
                163
            ],
            "runtime": [
                203
            ],
            "teamId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectCreateRepo": {
            "branch": [
                288
            ],
            "fullRepoName": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectDeploymentTriggersConnection": {
            "edges": [
                165
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "ProjectDeploymentTriggersConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                52
            ],
            "__typename": [
                288
            ]
        },
        "ProjectDeploymentsConnection": {
            "edges": [
                167
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "ProjectDeploymentsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                37
            ],
            "__typename": [
                288
            ]
        },
        "ProjectEnvironmentsConnection": {
            "edges": [
                169
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "ProjectEnvironmentsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                62
            ],
            "__typename": [
                288
            ]
        },
        "ProjectGroupsConnection": {
            "edges": [
                171
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "ProjectGroupsConnectionEdge": {
            "cursor": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectInvitation": {
            "email": [
                288
            ],
            "expiresAt": [
                36
            ],
            "id": [
                99
            ],
            "inviter": [
                173
            ],
            "isExpired": [
                12
            ],
            "project": [
                201
            ],
            "__typename": [
                288
            ]
        },
        "ProjectInvitationInviter": {
            "email": [
                288
            ],
            "name": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectInviteUserInput": {
            "email": [
                288
            ],
            "link": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectInvitee": {
            "email": [
                288
            ],
            "role": [
                185
            ],
            "__typename": [
                288
            ]
        },
        "ProjectMember": {
            "avatar": [
                288
            ],
            "email": [
                288
            ],
            "id": [
                288
            ],
            "name": [
                288
            ],
            "role": [
                185
            ],
            "__typename": [
                288
            ]
        },
        "ProjectMemberRemoveInput": {
            "projectId": [
                288
            ],
            "userId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectMemberUpdateInput": {
            "projectId": [
                288
            ],
            "role": [
                185
            ],
            "userId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectPermission": {
            "id": [
                99
            ],
            "projectId": [
                288
            ],
            "role": [
                185
            ],
            "userId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectPluginsConnection": {
            "edges": [
                181
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "ProjectPluginsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                142
            ],
            "__typename": [
                288
            ]
        },
        "ProjectProjectPermissionsConnection": {
            "edges": [
                183
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "ProjectProjectPermissionsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                179
            ],
            "__typename": [
                288
            ]
        },
        "ProjectResourceAccess": {
            "customDomain": [
                0
            ],
            "databaseDeployment": [
                0
            ],
            "deployment": [
                0
            ],
            "environment": [
                0
            ],
            "plugin": [
                0
            ],
            "__typename": [
                288
            ]
        },
        "ProjectRole": {},
        "ProjectServicesConnection": {
            "edges": [
                187
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "ProjectServicesConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                264
            ],
            "__typename": [
                288
            ]
        },
        "ProjectToken": {
            "createdAt": [
                36
            ],
            "displayToken": [
                288
            ],
            "environment": [
                62
            ],
            "environmentId": [
                288
            ],
            "id": [
                99
            ],
            "name": [
                288
            ],
            "project": [
                161
            ],
            "projectId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectTokenCreateInput": {
            "environmentId": [
                288
            ],
            "name": [
                288
            ],
            "projectId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectTransferConfirmInput": {
            "ownershipTransferId": [
                288
            ],
            "projectId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectTransferInitiateInput": {
            "memberId": [
                288
            ],
            "projectId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectTransferToTeamInput": {
            "teamId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectUpdateInput": {
            "baseEnvironmentId": [
                288
            ],
            "botPrEnvironments": [
                12
            ],
            "description": [
                288
            ],
            "isPublic": [
                12
            ],
            "name": [
                288
            ],
            "prDeploys": [
                12
            ],
            "prEnvCopyVolData": [
                12
            ],
            "__typename": [
                288
            ]
        },
        "ProjectUsageProperty": {},
        "ProjectVolumesConnection": {
            "edges": [
                196
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "ProjectVolumesConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                375
            ],
            "__typename": [
                288
            ]
        },
        "ProjectWebhook": {
            "filters": [
                288
            ],
            "id": [
                99
            ],
            "lastStatus": [
                102
            ],
            "projectId": [
                288
            ],
            "url": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ProjectWebhooksConnection": {
            "edges": [
                199
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "ProjectWebhooksConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                197
            ],
            "__typename": [
                288
            ]
        },
        "ProviderAuth": {
            "email": [
                288
            ],
            "id": [
                99
            ],
            "metadata": [
                110
            ],
            "provider": [
                288
            ],
            "userId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "PublicProjectInformation": {
            "id": [
                99
            ],
            "name": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "PublicProjectInvitation": {
            "on_InviteCode": [
                109
            ],
            "on_ProjectInvitation": [
                172
            ],
            "on_Node": [
                126
            ],
            "__typename": [
                288
            ]
        },
        "PublicRuntime": {},
        "PublicStats": {
            "totalDeploymentsLastMonth": [
                102
            ],
            "totalLogsLastMonth": [
                10
            ],
            "totalProjects": [
                102
            ],
            "totalRequestsLastMonth": [
                10
            ],
            "totalServices": [
                102
            ],
            "totalUsers": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "Query": {
            "adminVolumeInstancesForVolume": [
                377,
                {
                    "volumeId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "apiTokens": [
                206,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "buildLogs": [
                113,
                {
                    "deploymentId": [
                        288,
                        "String!"
                    ],
                    "endDate": [
                        36
                    ],
                    "filter": [
                        288
                    ],
                    "limit": [
                        102
                    ],
                    "startDate": [
                        36
                    ]
                }
            ],
            "changelogBlockImage": [
                288,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "creditTransferMetrics": [
                22
            ],
            "customDomain": [
                24,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "customDomainAvailable": [
                57,
                {
                    "domain": [
                        288,
                        "String!"
                    ]
                }
            ],
            "deployment": [
                37,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "deploymentEvents": [
                208,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "id": [
                        288,
                        "String!"
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "deploymentInstanceExecutions": [
                210,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "input": [
                        44,
                        "DeploymentInstanceExecutionListInput!"
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "deploymentLogs": [
                113,
                {
                    "deploymentId": [
                        288,
                        "String!"
                    ],
                    "endDate": [
                        36
                    ],
                    "filter": [
                        288
                    ],
                    "limit": [
                        102
                    ],
                    "startDate": [
                        36
                    ]
                }
            ],
            "deploymentSnapshot": [
                48,
                {
                    "deploymentId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggers": [
                212,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "deployments": [
                214,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "input": [
                        46,
                        "DeploymentListInput!"
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "domainStatus": [
                58,
                {
                    "id": [
                        288,
                        "String!"
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "domains": [
                5,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "egressGateways": [
                59,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "environment": [
                62,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "environmentLogs": [
                113,
                {
                    "afterDate": [
                        288
                    ],
                    "afterLimit": [
                        102
                    ],
                    "anchorDate": [
                        288
                    ],
                    "beforeDate": [
                        288
                    ],
                    "beforeLimit": [
                        102
                    ],
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "filter": [
                        288
                    ]
                }
            ],
            "environmentPatches": [
                216,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "environments": [
                218,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "isEphemeral": [
                        12
                    ],
                    "last": [
                        102
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "estimatedUsage": [
                79,
                {
                    "includeDeleted": [
                        12
                    ],
                    "measurements": [
                        120,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        288
                    ],
                    "teamId": [
                        288
                    ],
                    "userId": [
                        288
                    ]
                }
            ],
            "events": [
                220,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "environmentId": [
                        288
                    ],
                    "filter": [
                        82
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "gitHubRepoAccessAvailable": [
                89,
                {
                    "fullRepoName": [
                        288,
                        "String!"
                    ]
                }
            ],
            "githubIsRepoNameAvailable": [
                12,
                {
                    "fullRepoName": [
                        288,
                        "String!"
                    ]
                }
            ],
            "githubRepo": [
                94,
                {
                    "fullRepoName": [
                        288,
                        "String!"
                    ]
                }
            ],
            "githubRepoBranches": [
                90,
                {
                    "owner": [
                        288,
                        "String!"
                    ],
                    "repo": [
                        288,
                        "String!"
                    ]
                }
            ],
            "githubRepos": [
                91
            ],
            "githubWritableScopes": [
                288
            ],
            "herokuApps": [
                96
            ],
            "httpLogs": [
                98,
                {
                    "afterDate": [
                        288
                    ],
                    "afterLimit": [
                        102
                    ],
                    "anchorDate": [
                        288
                    ],
                    "beforeDate": [
                        288
                    ],
                    "beforeLimit": [
                        102
                    ],
                    "deploymentId": [
                        288,
                        "String!"
                    ],
                    "endDate": [
                        288
                    ],
                    "filter": [
                        288
                    ],
                    "limit": [
                        102
                    ],
                    "startDate": [
                        288
                    ]
                }
            ],
            "integrationAuth": [
                104,
                {
                    "provider": [
                        288,
                        "String!"
                    ],
                    "providerId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "integrationAuths": [
                222,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "integrations": [
                224,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "inviteCode": [
                109,
                {
                    "code": [
                        288,
                        "String!"
                    ]
                }
            ],
            "me": [
                350
            ],
            "metrics": [
                123,
                {
                    "averagingWindowSeconds": [
                        102
                    ],
                    "endDate": [
                        36
                    ],
                    "environmentId": [
                        288
                    ],
                    "groupBy": [
                        121,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        12
                    ],
                    "measurements": [
                        120,
                        "[MetricMeasurement!]!"
                    ],
                    "pluginId": [
                        288
                    ],
                    "projectId": [
                        288
                    ],
                    "sampleRateSeconds": [
                        102
                    ],
                    "serviceId": [
                        288
                    ],
                    "startDate": [
                        36,
                        "DateTime!"
                    ],
                    "teamId": [
                        288
                    ],
                    "userId": [
                        288
                    ],
                    "volumeId": [
                        288
                    ]
                }
            ],
            "node": [
                126,
                {
                    "id": [
                        99,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                126,
                {
                    "ids": [
                        99,
                        "[ID!]!"
                    ]
                }
            ],
            "observabilityDashboards": [
                226,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "platformStatus": [
                141
            ],
            "plugin": [
                142,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "pluginLogs": [
                113,
                {
                    "endDate": [
                        36
                    ],
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "filter": [
                        288
                    ],
                    "limit": [
                        102
                    ],
                    "pluginId": [
                        288,
                        "String!"
                    ],
                    "startDate": [
                        36
                    ]
                }
            ],
            "preferences": [
                155,
                {
                    "token": [
                        288
                    ]
                }
            ],
            "privateNetworkEndpoint": [
                159,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "privateNetworkId": [
                        288,
                        "String!"
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointNameAvailable": [
                12,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "prefix": [
                        288,
                        "String!"
                    ],
                    "privateNetworkId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "privateNetworks": [
                157,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "project": [
                161,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectInvitation": [
                202,
                {
                    "code": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectInvitations": [
                172,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectInviteCode": [
                109,
                {
                    "projectId": [
                        288,
                        "String!"
                    ],
                    "role": [
                        185,
                        "ProjectRole!"
                    ]
                }
            ],
            "projectMembers": [
                176,
                {
                    "projectId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectResourceAccess": [
                184,
                {
                    "projectId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projectToken": [
                188
            ],
            "projectTokens": [
                228,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "projects": [
                230,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "includeDeleted": [
                        12
                    ],
                    "last": [
                        102
                    ],
                    "teamId": [
                        288
                    ],
                    "userId": [
                        288
                    ]
                }
            ],
            "publicStats": [
                204
            ],
            "referralInfo": [
                246
            ],
            "regions": [
                253,
                {
                    "projectId": [
                        288
                    ]
                }
            ],
            "resourceAccess": [
                259,
                {
                    "explicitResourceOwner": [
                        86
                    ]
                }
            ],
            "service": [
                264,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "serviceDomainAvailable": [
                57,
                {
                    "domain": [
                        288,
                        "String!"
                    ]
                }
            ],
            "serviceInstance": [
                273,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceIsUpdatable": [
                12,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimitOverride": [
                274,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimits": [
                274,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "sessions": [
                232,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "tcpProxies": [
                297,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "team": [
                299,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "teamByCode": [
                299,
                {
                    "code": [
                        288,
                        "String!"
                    ]
                }
            ],
            "teamTemplates": [
                234,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ],
                    "teamId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "teamTrustedDomains": [
                236,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ],
                    "teamId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "template": [
                317,
                {
                    "code": [
                        288
                    ],
                    "owner": [
                        288
                    ],
                    "repo": [
                        288
                    ]
                }
            ],
            "templateKickbacksLeaderboard": [
                328
            ],
            "templateSourceForProject": [
                317,
                {
                    "projectId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "templatekickbacksTotal": [
                88
            ],
            "templates": [
                238,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ],
                    "recommended": [
                        12
                    ]
                }
            ],
            "twoFactorInfo": [
                339
            ],
            "usage": [
                4,
                {
                    "endDate": [
                        36
                    ],
                    "groupBy": [
                        121,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        12
                    ],
                    "measurements": [
                        120,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        288
                    ],
                    "startDate": [
                        36
                    ],
                    "teamId": [
                        288
                    ],
                    "userId": [
                        288
                    ]
                }
            ],
            "userIdForDiscordId": [
                288,
                {
                    "discordId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "userIdForSlackId": [
                288,
                {
                    "slackId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "userKickbackEarnings": [
                355,
                {
                    "userId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "userProfile": [
                357,
                {
                    "username": [
                        288,
                        "String!"
                    ]
                }
            ],
            "userTemplates": [
                240,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "variables": [
                73,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "pluginId": [
                        288
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ],
                    "serviceId": [
                        288
                    ],
                    "unrendered": [
                        12
                    ]
                }
            ],
            "variablesForServiceDeployment": [
                73,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ],
                    "serviceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "vercelInfo": [
                373
            ],
            "volumeInstance": [
                377,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupList": [
                378,
                {
                    "volumeInstanceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupScheduleList": [
                379,
                {
                    "volumeInstanceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "webhooks": [
                242,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ],
                    "projectId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "workflowStatus": [
                394,
                {
                    "workflowId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "workspace": [
                396,
                {
                    "workspaceId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                288
            ]
        },
        "QueryApiTokensConnection": {
            "edges": [
                207
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryApiTokensConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                6
            ],
            "__typename": [
                288
            ]
        },
        "QueryDeploymentEventsConnection": {
            "edges": [
                209
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryDeploymentEventsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                38
            ],
            "__typename": [
                288
            ]
        },
        "QueryDeploymentInstanceExecutionsConnection": {
            "edges": [
                211
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryDeploymentInstanceExecutionsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                41
            ],
            "__typename": [
                288
            ]
        },
        "QueryDeploymentTriggersConnection": {
            "edges": [
                213
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryDeploymentTriggersConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                52
            ],
            "__typename": [
                288
            ]
        },
        "QueryDeploymentsConnection": {
            "edges": [
                215
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryDeploymentsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                37
            ],
            "__typename": [
                288
            ]
        },
        "QueryEnvironmentPatchesConnection": {
            "edges": [
                217
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryEnvironmentPatchesConnectionEdge": {
            "cursor": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "QueryEnvironmentsConnection": {
            "edges": [
                219
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryEnvironmentsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                62
            ],
            "__typename": [
                288
            ]
        },
        "QueryEventsConnection": {
            "edges": [
                221
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryEventsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                80
            ],
            "__typename": [
                288
            ]
        },
        "QueryIntegrationAuthsConnection": {
            "edges": [
                223
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryIntegrationAuthsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                104
            ],
            "__typename": [
                288
            ]
        },
        "QueryIntegrationsConnection": {
            "edges": [
                225
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryIntegrationsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                103
            ],
            "__typename": [
                288
            ]
        },
        "QueryObservabilityDashboardsConnection": {
            "edges": [
                227
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryObservabilityDashboardsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                127
            ],
            "__typename": [
                288
            ]
        },
        "QueryProjectTokensConnection": {
            "edges": [
                229
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryProjectTokensConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                188
            ],
            "__typename": [
                288
            ]
        },
        "QueryProjectsConnection": {
            "edges": [
                231
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryProjectsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                161
            ],
            "__typename": [
                288
            ]
        },
        "QuerySessionsConnection": {
            "edges": [
                233
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QuerySessionsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                284
            ],
            "__typename": [
                288
            ]
        },
        "QueryTeamTemplatesConnection": {
            "edges": [
                235
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryTeamTemplatesConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                317
            ],
            "__typename": [
                288
            ]
        },
        "QueryTeamTrustedDomainsConnection": {
            "edges": [
                237
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryTeamTrustedDomainsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                311
            ],
            "__typename": [
                288
            ]
        },
        "QueryTemplatesConnection": {
            "edges": [
                239
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryTemplatesConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                317
            ],
            "__typename": [
                288
            ]
        },
        "QueryUserTemplatesConnection": {
            "edges": [
                241
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryUserTemplatesConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                317
            ],
            "__typename": [
                288
            ]
        },
        "QueryWebhooksConnection": {
            "edges": [
                243
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "QueryWebhooksConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                197
            ],
            "__typename": [
                288
            ]
        },
        "RecoveryCodeValidateInput": {
            "code": [
                288
            ],
            "twoFactorLinkingKey": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "RecoveryCodes": {
            "recoveryCodes": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ReferralInfo": {
            "code": [
                288
            ],
            "id": [
                99
            ],
            "referralStats": [
                248
            ],
            "status": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ReferralInfoUpdateInput": {
            "code": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ReferralStats": {
            "credited": [
                102
            ],
            "pending": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "ReferralStatus": {},
        "ReferralUser": {
            "code": [
                288
            ],
            "id": [
                288
            ],
            "status": [
                249
            ],
            "__typename": [
                288
            ]
        },
        "RefundRequest": {
            "amount": [
                102
            ],
            "decision": [
                252
            ],
            "id": [
                99
            ],
            "invoiceId": [
                288
            ],
            "plainThreadId": [
                288
            ],
            "reason": [
                288
            ],
            "teamId": [
                288
            ],
            "userId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "RefundRequestDecisionEnum": {},
        "Region": {
            "adminOnly": [
                12
            ],
            "country": [
                288
            ],
            "deploymentConstraints": [
                254
            ],
            "location": [
                288
            ],
            "name": [
                288
            ],
            "railwayMetal": [
                12
            ],
            "region": [
                288
            ],
            "teamId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "RegionDeploymentConstraints": {
            "adminOnly": [
                12
            ],
            "computeOnly": [
                12
            ],
            "runtimeExclusivity": [
                288
            ],
            "stagingOnly": [
                12
            ],
            "__typename": [
                288
            ]
        },
        "RegistrationStatus": {},
        "RegistryCredentialsInput": {
            "password": [
                288
            ],
            "username": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ResetPluginCredentialsInput": {
            "environmentId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ResetPluginInput": {
            "environmentId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ResourceAccess": {
            "project": [
                0
            ],
            "__typename": [
                288
            ]
        },
        "ResourceOwnerType": {},
        "RestartPolicyType": {},
        "SendCommunityThreadNotificationEmailInput": {
            "postEntryContent": [
                288
            ],
            "threadTitle": [
                288
            ],
            "threadUrl": [
                288
            ],
            "userIds": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "SerializedTemplateConfig": {},
        "Service": {
            "createdAt": [
                36
            ],
            "deletedAt": [
                36
            ],
            "deployments": [
                267,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "featureFlags": [
                2
            ],
            "icon": [
                288
            ],
            "id": [
                99
            ],
            "name": [
                288
            ],
            "project": [
                161
            ],
            "projectId": [
                288
            ],
            "repoTriggers": [
                277,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "serviceInstances": [
                279,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "templateServiceId": [
                288
            ],
            "templateThreadSlug": [
                288
            ],
            "updatedAt": [
                36
            ],
            "__typename": [
                288
            ]
        },
        "ServiceConnectInput": {
            "branch": [
                288
            ],
            "image": [
                288
            ],
            "repo": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ServiceCreateInput": {
            "branch": [
                288
            ],
            "environmentId": [
                288
            ],
            "icon": [
                288
            ],
            "name": [
                288
            ],
            "projectId": [
                288
            ],
            "registryCredentials": [
                256
            ],
            "source": [
                282
            ],
            "templateServiceId": [
                288
            ],
            "variables": [
                73
            ],
            "__typename": [
                288
            ]
        },
        "ServiceDeploymentsConnection": {
            "edges": [
                268
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "ServiceDeploymentsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                37
            ],
            "__typename": [
                288
            ]
        },
        "ServiceDomain": {
            "createdAt": [
                36
            ],
            "deletedAt": [
                36
            ],
            "domain": [
                288
            ],
            "environmentId": [
                288
            ],
            "id": [
                99
            ],
            "projectId": [
                288
            ],
            "serviceId": [
                288
            ],
            "suffix": [
                288
            ],
            "targetPort": [
                102
            ],
            "updatedAt": [
                36
            ],
            "__typename": [
                288
            ]
        },
        "ServiceDomainCreateInput": {
            "environmentId": [
                288
            ],
            "serviceId": [
                288
            ],
            "targetPort": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "ServiceDomainUpdateInput": {
            "domain": [
                288
            ],
            "environmentId": [
                288
            ],
            "serviceDomainId": [
                288
            ],
            "serviceId": [
                288
            ],
            "targetPort": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "ServiceFeatureFlagToggleInput": {
            "flag": [
                2
            ],
            "serviceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ServiceInstance": {
            "buildCommand": [
                288
            ],
            "builder": [
                13
            ],
            "createdAt": [
                36
            ],
            "cronSchedule": [
                288
            ],
            "deletedAt": [
                36
            ],
            "domains": [
                5
            ],
            "environmentId": [
                288
            ],
            "healthcheckPath": [
                288
            ],
            "healthcheckTimeout": [
                102
            ],
            "id": [
                99
            ],
            "isUpdatable": [
                12
            ],
            "latestDeployment": [
                37
            ],
            "nextCronRunAt": [
                36
            ],
            "nixpacksPlan": [
                110
            ],
            "numReplicas": [
                102
            ],
            "preDeployCommand": [
                110
            ],
            "railwayConfigFile": [
                288
            ],
            "region": [
                288
            ],
            "restartPolicyMaxRetries": [
                102
            ],
            "restartPolicyType": [
                261
            ],
            "rootDirectory": [
                288
            ],
            "serviceId": [
                288
            ],
            "serviceName": [
                288
            ],
            "sleepApplication": [
                12
            ],
            "source": [
                281
            ],
            "startCommand": [
                288
            ],
            "updatedAt": [
                36
            ],
            "upstreamUrl": [
                288
            ],
            "watchPatterns": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ServiceInstanceLimit": {},
        "ServiceInstanceLimitsUpdateInput": {
            "environmentId": [
                288
            ],
            "memoryGB": [
                88
            ],
            "serviceId": [
                288
            ],
            "vCPUs": [
                88
            ],
            "__typename": [
                288
            ]
        },
        "ServiceInstanceUpdateInput": {
            "buildCommand": [
                288
            ],
            "builder": [
                13
            ],
            "cronSchedule": [
                288
            ],
            "healthcheckPath": [
                288
            ],
            "healthcheckTimeout": [
                102
            ],
            "multiRegionConfig": [
                110
            ],
            "nixpacksPlan": [
                110
            ],
            "numReplicas": [
                102
            ],
            "preDeployCommand": [
                288
            ],
            "railwayConfigFile": [
                288
            ],
            "region": [
                288
            ],
            "registryCredentials": [
                256
            ],
            "restartPolicyMaxRetries": [
                102
            ],
            "restartPolicyType": [
                261
            ],
            "rootDirectory": [
                288
            ],
            "sleepApplication": [
                12
            ],
            "source": [
                282
            ],
            "startCommand": [
                288
            ],
            "watchPatterns": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ServiceRepoTriggersConnection": {
            "edges": [
                278
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "ServiceRepoTriggersConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                52
            ],
            "__typename": [
                288
            ]
        },
        "ServiceServiceInstancesConnection": {
            "edges": [
                280
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "ServiceServiceInstancesConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                273
            ],
            "__typename": [
                288
            ]
        },
        "ServiceSource": {
            "image": [
                288
            ],
            "repo": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ServiceSourceInput": {
            "image": [
                288
            ],
            "repo": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "ServiceUpdateInput": {
            "icon": [
                288
            ],
            "name": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Session": {
            "createdAt": [
                36
            ],
            "expiredAt": [
                36
            ],
            "id": [
                99
            ],
            "isCurrent": [
                12
            ],
            "name": [
                288
            ],
            "type": [
                285
            ],
            "updatedAt": [
                36
            ],
            "__typename": [
                288
            ]
        },
        "SessionType": {},
        "SharedVariableConfigureInput": {
            "disabledServiceIds": [
                288
            ],
            "enabledServiceIds": [
                288
            ],
            "environmentId": [
                288
            ],
            "name": [
                288
            ],
            "projectId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "SimilarTemplate": {
            "code": [
                288
            ],
            "createdAt": [
                36
            ],
            "creator": [
                320
            ],
            "deploys": [
                102
            ],
            "description": [
                288
            ],
            "health": [
                88
            ],
            "image": [
                288
            ],
            "name": [
                288
            ],
            "teamId": [
                288
            ],
            "userId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "String": {},
        "Subscription": {
            "buildLogs": [
                113,
                {
                    "deploymentId": [
                        288,
                        "String!"
                    ],
                    "filter": [
                        288
                    ],
                    "limit": [
                        102
                    ]
                }
            ],
            "deployment": [
                37,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "deploymentEvents": [
                38,
                {
                    "id": [
                        288,
                        "String!"
                    ]
                }
            ],
            "deploymentInstanceExecutions": [
                41,
                {
                    "input": [
                        43,
                        "DeploymentInstanceExecutionInput!"
                    ]
                }
            ],
            "deploymentLogs": [
                113,
                {
                    "deploymentId": [
                        288,
                        "String!"
                    ],
                    "filter": [
                        288
                    ],
                    "limit": [
                        102
                    ]
                }
            ],
            "environmentLogs": [
                113,
                {
                    "afterDate": [
                        288
                    ],
                    "afterLimit": [
                        102
                    ],
                    "anchorDate": [
                        288
                    ],
                    "beforeDate": [
                        288
                    ],
                    "beforeLimit": [
                        102
                    ],
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "filter": [
                        288
                    ]
                }
            ],
            "httpLogs": [
                98,
                {
                    "afterDate": [
                        288
                    ],
                    "afterLimit": [
                        102
                    ],
                    "anchorDate": [
                        288
                    ],
                    "beforeDate": [
                        288
                    ],
                    "beforeLimit": [
                        102
                    ],
                    "deploymentId": [
                        288,
                        "String!"
                    ],
                    "filter": [
                        288
                    ]
                }
            ],
            "pluginLogs": [
                113,
                {
                    "environmentId": [
                        288,
                        "String!"
                    ],
                    "filter": [
                        288
                    ],
                    "limit": [
                        102
                    ],
                    "pluginId": [
                        288,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                288
            ]
        },
        "SubscriptionDiscount": {
            "couponId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "SubscriptionItem": {
            "itemId": [
                288
            ],
            "priceId": [
                288
            ],
            "productId": [
                288
            ],
            "quantity": [
                10
            ],
            "__typename": [
                288
            ]
        },
        "SubscriptionModel": {},
        "SubscriptionPlanLimit": {},
        "SubscriptionPlanType": {},
        "SubscriptionState": {},
        "SupportTierOverride": {},
        "TCPProxy": {
            "applicationPort": [
                102
            ],
            "createdAt": [
                36
            ],
            "deletedAt": [
                36
            ],
            "domain": [
                288
            ],
            "environmentId": [
                288
            ],
            "id": [
                99
            ],
            "proxyPort": [
                102
            ],
            "serviceId": [
                288
            ],
            "updatedAt": [
                36
            ],
            "__typename": [
                288
            ]
        },
        "TCPProxyCreateInput": {
            "applicationPort": [
                102
            ],
            "environmentId": [
                288
            ],
            "serviceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Team": {
            "adoptionHistory": [
                3
            ],
            "adoptionLevel": [
                88
            ],
            "avatar": [
                288
            ],
            "banReason": [
                288
            ],
            "createdAt": [
                36
            ],
            "customer": [
                27
            ],
            "discordRole": [
                288
            ],
            "id": [
                99
            ],
            "members": [
                305
            ],
            "name": [
                288
            ],
            "preferredRegion": [
                288
            ],
            "projects": [
                308,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "promptUpgrade": [
                12
            ],
            "slackChannelId": [
                288
            ],
            "supportTierOverride": [
                296
            ],
            "teamPermissions": [
                306
            ],
            "updatedAt": [
                36
            ],
            "workspace": [
                396
            ],
            "__typename": [
                288
            ]
        },
        "TeamBulkProjectTransferInput": {
            "projectIds": [
                288
            ],
            "teamId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TeamCreateAndSubscribeInput": {
            "avatar": [
                288
            ],
            "name": [
                288
            ],
            "paymentMethodId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TeamCreateAndSubscribeResponse": {
            "customerId": [
                288
            ],
            "paymentIntent": [
                110
            ],
            "teamId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TeamCreateInput": {
            "avatar": [
                288
            ],
            "name": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TeamInviteCodeCreateInput": {
            "role": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TeamMember": {
            "avatar": [
                288
            ],
            "email": [
                288
            ],
            "featureFlags": [
                1
            ],
            "id": [
                288
            ],
            "name": [
                288
            ],
            "role": [
                310
            ],
            "__typename": [
                288
            ]
        },
        "TeamPermission": {
            "createdAt": [
                36
            ],
            "id": [
                99
            ],
            "role": [
                310
            ],
            "teamId": [
                288
            ],
            "updatedAt": [
                36
            ],
            "userId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TeamPermissionChangeInput": {
            "role": [
                310
            ],
            "teamId": [
                288
            ],
            "userId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TeamProjectsConnection": {
            "edges": [
                309
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "TeamProjectsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                161
            ],
            "__typename": [
                288
            ]
        },
        "TeamRole": {},
        "TeamTrustedDomain": {
            "domainName": [
                288
            ],
            "id": [
                99
            ],
            "teamId": [
                288
            ],
            "teamRole": [
                288
            ],
            "verificationData": [
                338
            ],
            "verificationType": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TeamTrustedDomainCreateInput": {
            "domainName": [
                288
            ],
            "teamId": [
                288
            ],
            "teamRole": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TeamUpdateInput": {
            "avatar": [
                288
            ],
            "name": [
                288
            ],
            "preferredRegion": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TeamUserInviteInput": {
            "code": [
                288
            ],
            "email": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TeamUserRemoveInput": {
            "userId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TelemetrySendInput": {
            "command": [
                288
            ],
            "environmentId": [
                288
            ],
            "error": [
                288
            ],
            "projectId": [
                288
            ],
            "stacktrace": [
                288
            ],
            "version": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Template": {
            "activeProjects": [
                102
            ],
            "canvasConfig": [
                15
            ],
            "category": [
                288
            ],
            "code": [
                288
            ],
            "communityThreadSlug": [
                288
            ],
            "config": [
                319
            ],
            "createdAt": [
                36
            ],
            "creator": [
                320
            ],
            "demoProjectId": [
                288
            ],
            "description": [
                288
            ],
            "guides": [
                327
            ],
            "health": [
                88
            ],
            "id": [
                99
            ],
            "image": [
                288
            ],
            "isApproved": [
                12
            ],
            "isV2Template": [
                12
            ],
            "languages": [
                288
            ],
            "metadata": [
                329
            ],
            "name": [
                288
            ],
            "projects": [
                102
            ],
            "readme": [
                288
            ],
            "serializedConfig": [
                263
            ],
            "services": [
                334,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "similarTemplates": [
                287
            ],
            "status": [
                336
            ],
            "tags": [
                288
            ],
            "teamId": [
                288
            ],
            "totalPayout": [
                88
            ],
            "userId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TemplateCloneInput": {
            "code": [
                288
            ],
            "teamId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TemplateConfig": {},
        "TemplateCreator": {
            "avatar": [
                288
            ],
            "hasPublicProfile": [
                12
            ],
            "name": [
                288
            ],
            "username": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TemplateDeleteInput": {
            "teamId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TemplateDeployInput": {
            "environmentId": [
                288
            ],
            "projectId": [
                288
            ],
            "services": [
                324
            ],
            "teamId": [
                288
            ],
            "templateCode": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TemplateDeployPayload": {
            "projectId": [
                288
            ],
            "workflowId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TemplateDeployService": {
            "commit": [
                288
            ],
            "hasDomain": [
                12
            ],
            "healthcheckPath": [
                288
            ],
            "id": [
                288
            ],
            "isPrivate": [
                12
            ],
            "name": [
                288
            ],
            "owner": [
                288
            ],
            "preDeployCommand": [
                288
            ],
            "rootDirectory": [
                288
            ],
            "serviceIcon": [
                288
            ],
            "serviceName": [
                288
            ],
            "startCommand": [
                288
            ],
            "tcpProxyApplicationPort": [
                102
            ],
            "template": [
                288
            ],
            "variables": [
                73
            ],
            "volumes": [
                337
            ],
            "__typename": [
                288
            ]
        },
        "TemplateDeployV2Input": {
            "environmentId": [
                288
            ],
            "projectId": [
                288
            ],
            "serializedConfig": [
                263
            ],
            "teamId": [
                288
            ],
            "templateId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TemplateGenerateInput": {
            "environmentId": [
                288
            ],
            "projectId": [
                288
            ],
            "teamId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TemplateGuide": {
            "post": [
                288
            ],
            "video": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TemplateKickbacksLeaderboard": {
            "total_amount": [
                88
            ],
            "userId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TemplateMetadata": {},
        "TemplatePublishInput": {
            "category": [
                288
            ],
            "demoProjectId": [
                288
            ],
            "description": [
                288
            ],
            "image": [
                288
            ],
            "readme": [
                288
            ],
            "teamId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TemplateService": {
            "config": [
                332
            ],
            "createdAt": [
                36
            ],
            "id": [
                99
            ],
            "templateId": [
                288
            ],
            "updatedAt": [
                36
            ],
            "__typename": [
                288
            ]
        },
        "TemplateServiceConfig": {},
        "TemplateServiceSourceEjectInput": {
            "projectId": [
                288
            ],
            "repoName": [
                288
            ],
            "repoOwner": [
                288
            ],
            "serviceIds": [
                288
            ],
            "upstreamUrl": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TemplateServicesConnection": {
            "edges": [
                335
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "TemplateServicesConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                331
            ],
            "__typename": [
                288
            ]
        },
        "TemplateStatus": {},
        "TemplateVolume": {},
        "TrustedDomainVerificationData": {
            "domainMatch": [
                56
            ],
            "domainStatus": [
                26
            ],
            "__typename": [
                288
            ]
        },
        "TwoFactorInfo": {
            "hasRecoveryCodes": [
                12
            ],
            "isVerified": [
                12
            ],
            "__typename": [
                288
            ]
        },
        "TwoFactorInfoCreateInput": {
            "token": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TwoFactorInfoSecret": {
            "secret": [
                288
            ],
            "uri": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "TwoFactorInfoValidateInput": {
            "token": [
                288
            ],
            "twoFactorLinkingKey": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Upload": {},
        "UsageAnomaly": {
            "actedOn": [
                36
            ],
            "action": [
                345
            ],
            "actorId": [
                288
            ],
            "flaggedAt": [
                36
            ],
            "flaggedFor": [
                346
            ],
            "id": [
                99
            ],
            "__typename": [
                288
            ]
        },
        "UsageAnomalyAction": {},
        "UsageAnomalyFlagReason": {},
        "UsageLimit": {
            "customerId": [
                288
            ],
            "hardLimit": [
                102
            ],
            "id": [
                99
            ],
            "isOverLimit": [
                12
            ],
            "softLimit": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "UsageLimitRemoveInput": {
            "customerId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "UsageLimitSetInput": {
            "customerId": [
                288
            ],
            "hardLimitDollars": [
                102
            ],
            "softLimitDollars": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "User": {
            "agreedFairUse": [
                12
            ],
            "avatar": [
                288
            ],
            "banReason": [
                288
            ],
            "cost": [
                351
            ],
            "createdAt": [
                36
            ],
            "customer": [
                27
            ],
            "email": [
                288
            ],
            "featureFlags": [
                1
            ],
            "flags": [
                352
            ],
            "has2FA": [
                12
            ],
            "id": [
                99
            ],
            "isAdmin": [
                12
            ],
            "isConductor": [
                12
            ],
            "isDevPlan": [
                12
            ],
            "isEligibleForFreeHobbyPlan": [
                12
            ],
            "isOnHobbyPlan": [
                12
            ],
            "isVerified": [
                12
            ],
            "lastLogin": [
                36
            ],
            "name": [
                288
            ],
            "profile": [
                356
            ],
            "projects": [
                361,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "providerAuths": [
                363,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "referredUsers": [
                250
            ],
            "registrationStatus": [
                255
            ],
            "riskLevel": [
                88
            ],
            "teams": [
                365,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "termsAgreedOn": [
                36
            ],
            "username": [
                288
            ],
            "workspace": [
                396
            ],
            "workspaces": [
                396
            ],
            "__typename": [
                288
            ]
        },
        "UserCost": {
            "current": [
                88
            ],
            "estimated": [
                88
            ],
            "__typename": [
                288
            ]
        },
        "UserFlag": {},
        "UserFlagsRemoveInput": {
            "flags": [
                352
            ],
            "userId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "UserFlagsSetInput": {
            "flags": [
                352
            ],
            "userId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "UserKickbackEarnings": {
            "total_amount": [
                88
            ],
            "__typename": [
                288
            ]
        },
        "UserProfile": {
            "bio": [
                288
            ],
            "isPublic": [
                12
            ],
            "website": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "UserProfileResponse": {
            "avatar": [
                288
            ],
            "createdAt": [
                36
            ],
            "customerId": [
                288
            ],
            "id": [
                288
            ],
            "isTrialing": [
                12
            ],
            "name": [
                288
            ],
            "profile": [
                356
            ],
            "publicProjects": [
                358,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "publishedTemplates": [
                287
            ],
            "state": [
                288
            ],
            "totalDeploys": [
                102
            ],
            "username": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "UserProfileResponsePublicProjectsConnection": {
            "edges": [
                359
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "UserProfileResponsePublicProjectsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                161
            ],
            "__typename": [
                288
            ]
        },
        "UserProfileUpdateInput": {
            "bio": [
                288
            ],
            "isPublic": [
                12
            ],
            "website": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "UserProjectsConnection": {
            "edges": [
                362
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "UserProjectsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                161
            ],
            "__typename": [
                288
            ]
        },
        "UserProviderAuthsConnection": {
            "edges": [
                364
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "UserProviderAuthsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                200
            ],
            "__typename": [
                288
            ]
        },
        "UserTeamsConnection": {
            "edges": [
                366
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "UserTeamsConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                299
            ],
            "__typename": [
                288
            ]
        },
        "UserUpdateInput": {
            "avatar": [
                288
            ],
            "name": [
                288
            ],
            "username": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Variable": {
            "createdAt": [
                36
            ],
            "environment": [
                62
            ],
            "environmentId": [
                288
            ],
            "id": [
                99
            ],
            "isSealed": [
                12
            ],
            "name": [
                288
            ],
            "plugin": [
                142
            ],
            "pluginId": [
                288
            ],
            "references": [
                288
            ],
            "service": [
                264
            ],
            "serviceId": [
                288
            ],
            "updatedAt": [
                36
            ],
            "__typename": [
                288
            ]
        },
        "VariableCollectionUpsertInput": {
            "environmentId": [
                288
            ],
            "projectId": [
                288
            ],
            "replace": [
                12
            ],
            "serviceId": [
                288
            ],
            "variables": [
                73
            ],
            "__typename": [
                288
            ]
        },
        "VariableDeleteInput": {
            "environmentId": [
                288
            ],
            "name": [
                288
            ],
            "projectId": [
                288
            ],
            "serviceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "VariableUpsertInput": {
            "environmentId": [
                288
            ],
            "name": [
                288
            ],
            "projectId": [
                288
            ],
            "serviceId": [
                288
            ],
            "value": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "VercelAccount": {
            "id": [
                288
            ],
            "integrationAuthId": [
                288
            ],
            "isUser": [
                12
            ],
            "name": [
                288
            ],
            "projects": [
                374
            ],
            "slug": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "VercelInfo": {
            "accounts": [
                372
            ],
            "__typename": [
                288
            ]
        },
        "VercelProject": {
            "accountId": [
                288
            ],
            "id": [
                288
            ],
            "name": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Volume": {
            "createdAt": [
                36
            ],
            "id": [
                99
            ],
            "name": [
                288
            ],
            "project": [
                161
            ],
            "projectId": [
                288
            ],
            "volumeInstances": [
                385,
                {
                    "after": [
                        288
                    ],
                    "before": [
                        288
                    ],
                    "first": [
                        102
                    ],
                    "last": [
                        102
                    ]
                }
            ],
            "__typename": [
                288
            ]
        },
        "VolumeCreateInput": {
            "environmentId": [
                288
            ],
            "mountPath": [
                288
            ],
            "projectId": [
                288
            ],
            "serviceId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "VolumeInstance": {
            "createdAt": [
                36
            ],
            "currentSizeMB": [
                88
            ],
            "environment": [
                62
            ],
            "environmentId": [
                288
            ],
            "externalId": [
                288
            ],
            "id": [
                99
            ],
            "mountPath": [
                288
            ],
            "region": [
                288
            ],
            "service": [
                264
            ],
            "serviceId": [
                288
            ],
            "sizeMB": [
                102
            ],
            "state": [
                383
            ],
            "type": [
                381
            ],
            "volume": [
                375
            ],
            "volumeId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "VolumeInstanceBackup": {
            "createdAt": [
                36
            ],
            "creatorId": [
                288
            ],
            "expiresAt": [
                36
            ],
            "externalId": [
                288
            ],
            "id": [
                288
            ],
            "name": [
                288
            ],
            "referencedMB": [
                102
            ],
            "usedMB": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "VolumeInstanceBackupSchedule": {
            "createdAt": [
                36
            ],
            "cron": [
                288
            ],
            "id": [
                99
            ],
            "kind": [
                380
            ],
            "name": [
                288
            ],
            "retentionSeconds": [
                102
            ],
            "__typename": [
                288
            ]
        },
        "VolumeInstanceBackupScheduleKind": {},
        "VolumeInstanceType": {},
        "VolumeInstanceUpdateInput": {
            "mountPath": [
                288
            ],
            "serviceId": [
                288
            ],
            "state": [
                383
            ],
            "type": [
                381
            ],
            "__typename": [
                288
            ]
        },
        "VolumeState": {},
        "VolumeUpdateInput": {
            "name": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "VolumeVolumeInstancesConnection": {
            "edges": [
                386
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                288
            ]
        },
        "VolumeVolumeInstancesConnectionEdge": {
            "cursor": [
                288
            ],
            "node": [
                377
            ],
            "__typename": [
                288
            ]
        },
        "WebhookCreateInput": {
            "filters": [
                288
            ],
            "projectId": [
                288
            ],
            "url": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "WebhookUpdateInput": {
            "filters": [
                288
            ],
            "url": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "Withdrawal": {
            "amount": [
                88
            ],
            "createdAt": [
                36
            ],
            "customerId": [
                288
            ],
            "id": [
                99
            ],
            "status": [
                392
            ],
            "updatedAt": [
                36
            ],
            "withdrawalAccountId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "WithdrawalAccount": {
            "customerId": [
                288
            ],
            "id": [
                99
            ],
            "platform": [
                391
            ],
            "platformDetails": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "WithdrawalPlatformTypes": {},
        "WithdrawalStatusType": {},
        "WorkflowId": {
            "workflowId": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "WorkflowResult": {
            "error": [
                288
            ],
            "status": [
                395
            ],
            "__typename": [
                288
            ]
        },
        "WorkflowStatus": {},
        "Workspace": {
            "createdAt": [
                36
            ],
            "customer": [
                27
            ],
            "id": [
                99
            ],
            "subscriptionModel": [
                292
            ],
            "team": [
                299
            ],
            "__typename": [
                288
            ]
        },
        "WorkspaceUpdateInput": {
            "avatar": [
                288
            ],
            "name": [
                288
            ],
            "preferredRegion": [
                288
            ],
            "__typename": [
                288
            ]
        },
        "customerTogglePayoutsToCreditsInput": {
            "isWithdrawingToCredits": [
                12
            ],
            "__typename": [
                288
            ]
        }
    }
}