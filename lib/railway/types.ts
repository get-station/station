export default {
    "scalars": [
        1,
        2,
        3,
        17,
        19,
        20,
        21,
        22,
        24,
        25,
        27,
        31,
        42,
        43,
        44,
        46,
        52,
        57,
        59,
        62,
        67,
        76,
        84,
        89,
        97,
        102,
        104,
        115,
        117,
        118,
        126,
        128,
        134,
        136,
        137,
        140,
        141,
        142,
        150,
        151,
        154,
        155,
        156,
        165,
        171,
        175,
        177,
        179,
        186,
        187,
        226,
        236,
        244,
        293,
        299,
        304,
        306,
        307,
        311,
        312,
        313,
        325,
        336,
        339,
        340,
        344,
        345,
        346,
        347,
        348,
        349,
        357,
        360,
        369,
        373,
        377,
        378,
        385,
        386,
        387,
        392,
        417,
        422,
        426,
        429,
        432
    ],
    "types": {
        "AccessRule": {
            "disallowed": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ActiveFeatureFlag": {},
        "ActivePlatformFlag": {},
        "ActiveServiceFeatureFlag": {},
        "AdoptionInfo": {
            "adoptionLevel": [
                102
            ],
            "createdAt": [
                46
            ],
            "deltaLevel": [
                102
            ],
            "id": [
                115
            ],
            "matchedIcpEmail": [
                340
            ],
            "monthlyEstimatedUsage": [
                102
            ],
            "numConfigFile": [
                118
            ],
            "numCronSchedule": [
                118
            ],
            "numDeploys": [
                118
            ],
            "numEnvs": [
                118
            ],
            "numFailedDeploys": [
                118
            ],
            "numHealthcheck": [
                118
            ],
            "numIconConfig": [
                118
            ],
            "numRegion": [
                118
            ],
            "numReplicas": [
                118
            ],
            "numRootDirectory": [
                118
            ],
            "numSeats": [
                118
            ],
            "numServices": [
                118
            ],
            "numVariables": [
                118
            ],
            "numWatchPatterns": [
                118
            ],
            "totalCores": [
                102
            ],
            "totalDisk": [
                102
            ],
            "totalNetwork": [
                102
            ],
            "updatedAt": [
                46
            ],
            "workspace": [
                430
            ],
            "__typename": [
                340
            ]
        },
        "AggregatedUsage": {
            "measurement": [
                136
            ],
            "tags": [
                138
            ],
            "value": [
                102
            ],
            "__typename": [
                340
            ]
        },
        "AllDomains": {
            "customDomains": [
                32
            ],
            "serviceDomains": [
                320
            ],
            "__typename": [
                340
            ]
        },
        "ApiToken": {
            "displayToken": [
                340
            ],
            "id": [
                115
            ],
            "name": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ApiTokenContext": {
            "workspaces": [
                11
            ],
            "__typename": [
                340
            ]
        },
        "ApiTokenCreateInput": {
            "name": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ApiTokenRateLimit": {
            "remainingPoints": [
                118
            ],
            "resetsAt": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ApiTokenWorkspace": {
            "id": [
                340
            ],
            "name": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "AppliedByMember": {
            "avatar": [
                340
            ],
            "email": [
                340
            ],
            "id": [
                340
            ],
            "name": [
                340
            ],
            "username": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "AuditLog": {
            "context": [
                126
            ],
            "createdAt": [
                46
            ],
            "environment": [
                75
            ],
            "environmentId": [
                340
            ],
            "eventType": [
                340
            ],
            "id": [
                115
            ],
            "payload": [
                126
            ],
            "project": [
                197
            ],
            "projectId": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "AuditLogEventTypeInfo": {
            "description": [
                340
            ],
            "eventType": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "AuditLogFilterInput": {
            "endDate": [
                46
            ],
            "environmentId": [
                340
            ],
            "eventTypes": [
                340
            ],
            "projectId": [
                340
            ],
            "startDate": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "BaseEnvironmentOverrideInput": {
            "baseEnvironmentOverrideId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "BigInt": {},
        "BillingPeriod": {
            "end": [
                46
            ],
            "start": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "Boolean": {},
        "Builder": {},
        "CDNProvider": {},
        "CanvasConfig": {},
        "CertificatePublicData": {
            "domainNames": [
                340
            ],
            "expiresAt": [
                46
            ],
            "fingerprintSha256": [
                340
            ],
            "issuedAt": [
                46
            ],
            "keyType": [
                128
            ],
            "__typename": [
                340
            ]
        },
        "CertificateStatus": {},
        "CertificateStatusDetailed": {},
        "CnameCheck": {
            "link": [
                340
            ],
            "message": [
                340
            ],
            "status": [
                27
            ],
            "__typename": [
                340
            ]
        },
        "CnameCheckStatus": {},
        "ComplianceAgreementsInfo": {
            "hasBAA": [
                19
            ],
            "hasDPA": [
                19
            ],
            "__typename": [
                340
            ]
        },
        "Container": {
            "createdAt": [
                46
            ],
            "deletedAt": [
                46
            ],
            "environment": [
                75
            ],
            "environmentId": [
                340
            ],
            "id": [
                115
            ],
            "migratedAt": [
                46
            ],
            "plugin": [
                181
            ],
            "pluginId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "Credit": {
            "amount": [
                102
            ],
            "createdAt": [
                46
            ],
            "customerId": [
                340
            ],
            "id": [
                115
            ],
            "memo": [
                340
            ],
            "type": [
                31
            ],
            "updatedAt": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "CreditType": {},
        "CustomDomain": {
            "cnameCheck": [
                26
            ],
            "createdAt": [
                46
            ],
            "deletedAt": [
                46
            ],
            "domain": [
                340
            ],
            "edgeId": [
                340
            ],
            "environmentId": [
                340
            ],
            "id": [
                115
            ],
            "projectId": [
                340
            ],
            "serviceId": [
                340
            ],
            "status": [
                34
            ],
            "targetPort": [
                118
            ],
            "updatedAt": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "CustomDomainCreateInput": {
            "domain": [
                340
            ],
            "environmentId": [
                340
            ],
            "projectId": [
                340
            ],
            "serviceId": [
                340
            ],
            "targetPort": [
                118
            ],
            "__typename": [
                340
            ]
        },
        "CustomDomainStatus": {
            "cdnProvider": [
                21
            ],
            "certificateStatus": [
                24
            ],
            "certificateStatusDetailed": [
                25
            ],
            "certificates": [
                23
            ],
            "dnsRecords": [
                45
            ],
            "__typename": [
                340
            ]
        },
        "Customer": {
            "appliedCredits": [
                102
            ],
            "billingAddress": [
                36
            ],
            "billingEmail": [
                340
            ],
            "billingPeriod": [
                18
            ],
            "creditBalance": [
                102
            ],
            "credits": [
                37,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "currentUsage": [
                102
            ],
            "defaultPaymentMethod": [
                173
            ],
            "defaultPaymentMethodId": [
                340
            ],
            "hasExhaustedFreePlan": [
                19
            ],
            "id": [
                115
            ],
            "invoices": [
                39
            ],
            "isPrepaying": [
                19
            ],
            "isTrialing": [
                19
            ],
            "isUsageSubscriber": [
                19
            ],
            "isWithdrawingToCredits": [
                19
            ],
            "planLimitOverride": [
                176
            ],
            "remainingUsageCreditBalance": [
                102
            ],
            "state": [
                347
            ],
            "stripeCustomerId": [
                340
            ],
            "subscriptions": [
                40
            ],
            "supportedWithdrawalPlatforms": [
                426
            ],
            "taxIds": [
                41
            ],
            "trialDaysRemaining": [
                118
            ],
            "usageLimit": [
                388
            ],
            "workspace": [
                430
            ],
            "__typename": [
                340
            ]
        },
        "CustomerAddress": {
            "city": [
                340
            ],
            "country": [
                340
            ],
            "line1": [
                340
            ],
            "line2": [
                340
            ],
            "name": [
                340
            ],
            "postalCode": [
                340
            ],
            "state": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "CustomerCreditsConnection": {
            "edges": [
                38
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "CustomerCreditsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                30
            ],
            "__typename": [
                340
            ]
        },
        "CustomerInvoice": {
            "amountDue": [
                102
            ],
            "amountPaid": [
                102
            ],
            "hostedURL": [
                340
            ],
            "invoiceId": [
                340
            ],
            "items": [
                343
            ],
            "lastPaymentError": [
                340
            ],
            "paymentIntentStatus": [
                340
            ],
            "pdfURL": [
                340
            ],
            "periodEnd": [
                340
            ],
            "periodStart": [
                340
            ],
            "reissuedInvoiceFrom": [
                340
            ],
            "reissuedInvoiceOf": [
                340
            ],
            "status": [
                340
            ],
            "subscriptionId": [
                340
            ],
            "subscriptionStatus": [
                340
            ],
            "total": [
                118
            ],
            "__typename": [
                340
            ]
        },
        "CustomerSubscription": {
            "billingCycleAnchor": [
                46
            ],
            "cancelAt": [
                340
            ],
            "cancelAtPeriodEnd": [
                19
            ],
            "couponId": [
                340
            ],
            "discounts": [
                342
            ],
            "id": [
                340
            ],
            "items": [
                343
            ],
            "latestInvoiceId": [
                340
            ],
            "nextInvoiceCurrentTotal": [
                118
            ],
            "nextInvoiceDate": [
                340
            ],
            "status": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "CustomerTaxId": {
            "id": [
                340
            ],
            "type": [
                340
            ],
            "value": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "DNSRecordPurpose": {},
        "DNSRecordStatus": {},
        "DNSRecordType": {},
        "DNSRecords": {
            "currentValue": [
                340
            ],
            "fqdn": [
                340
            ],
            "hostlabel": [
                340
            ],
            "purpose": [
                42
            ],
            "recordType": [
                44
            ],
            "requiredValue": [
                340
            ],
            "status": [
                43
            ],
            "zone": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "DateTime": {},
        "Deployment": {
            "canRedeploy": [
                19
            ],
            "canRollback": [
                19
            ],
            "createdAt": [
                46
            ],
            "creator": [
                48
            ],
            "deploymentStopped": [
                19
            ],
            "environment": [
                75
            ],
            "environmentId": [
                340
            ],
            "id": [
                115
            ],
            "instances": [
                49
            ],
            "meta": [
                59
            ],
            "projectId": [
                340
            ],
            "service": [
                314
            ],
            "serviceId": [
                340
            ],
            "snapshotId": [
                340
            ],
            "sockets": [
                61
            ],
            "staticUrl": [
                340
            ],
            "status": [
                62
            ],
            "statusUpdatedAt": [
                46
            ],
            "suggestAddServiceDomain": [
                19
            ],
            "updatedAt": [
                46
            ],
            "url": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentCreator": {
            "avatar": [
                340
            ],
            "email": [
                340
            ],
            "id": [
                340
            ],
            "name": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentDeploymentInstance": {
            "id": [
                340
            ],
            "status": [
                57
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentEvent": {
            "completedAt": [
                46
            ],
            "createdAt": [
                46
            ],
            "id": [
                115
            ],
            "payload": [
                51
            ],
            "step": [
                52
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentEventPayload": {
            "error": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentEventStep": {},
        "DeploymentInstanceExecution": {
            "completedAt": [
                46
            ],
            "createdAt": [
                46
            ],
            "deploymentId": [
                340
            ],
            "deploymentMeta": [
                59
            ],
            "id": [
                115
            ],
            "status": [
                57
            ],
            "updatedAt": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentInstanceExecutionCreateInput": {
            "serviceInstanceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentInstanceExecutionInput": {
            "deploymentId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentInstanceExecutionListInput": {
            "environmentId": [
                340
            ],
            "serviceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentInstanceStatus": {},
        "DeploymentListInput": {
            "environmentId": [
                340
            ],
            "includeDeleted": [
                19
            ],
            "projectId": [
                340
            ],
            "serviceId": [
                340
            ],
            "status": [
                63
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentMeta": {},
        "DeploymentSnapshot": {
            "createdAt": [
                46
            ],
            "id": [
                115
            ],
            "updatedAt": [
                46
            ],
            "variables": [
                89
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentSocket": {
            "ipv6": [
                19
            ],
            "port": [
                118
            ],
            "processName": [
                340
            ],
            "updatedAt": [
                118
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentStatus": {},
        "DeploymentStatusInput": {
            "in": [
                62
            ],
            "notIn": [
                62
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentTrigger": {
            "baseEnvironmentOverrideId": [
                340
            ],
            "branch": [
                340
            ],
            "checkSuites": [
                19
            ],
            "environmentId": [
                340
            ],
            "id": [
                115
            ],
            "projectId": [
                340
            ],
            "provider": [
                340
            ],
            "repository": [
                340
            ],
            "serviceId": [
                340
            ],
            "validCheckSuites": [
                118
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentTriggerCreateInput": {
            "branch": [
                340
            ],
            "checkSuites": [
                19
            ],
            "environmentId": [
                340
            ],
            "projectId": [
                340
            ],
            "provider": [
                340
            ],
            "repository": [
                340
            ],
            "rootDirectory": [
                340
            ],
            "serviceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "DeploymentTriggerUpdateInput": {
            "branch": [
                340
            ],
            "checkSuites": [
                19
            ],
            "repository": [
                340
            ],
            "rootDirectory": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "DisplayConfig": {},
        "DockerComposeImport": {
            "errors": [
                340
            ],
            "patch": [
                76
            ],
            "__typename": [
                340
            ]
        },
        "Domain": {
            "createdAt": [
                46
            ],
            "deletedAt": [
                46
            ],
            "domain": [
                340
            ],
            "edgeId": [
                340
            ],
            "environmentId": [
                340
            ],
            "id": [
                115
            ],
            "projectId": [
                340
            ],
            "serviceId": [
                340
            ],
            "targetPort": [
                118
            ],
            "updatedAt": [
                46
            ],
            "on_CustomDomain": [
                32
            ],
            "on_ServiceDomain": [
                320
            ],
            "__typename": [
                340
            ]
        },
        "DomainAvailable": {
            "available": [
                19
            ],
            "message": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "DomainWithStatus": {
            "cdnProvider": [
                21
            ],
            "certificateStatus": [
                24
            ],
            "certificateStatusDetailed": [
                25
            ],
            "certificates": [
                23
            ],
            "dnsRecords": [
                45
            ],
            "domain": [
                69
            ],
            "__typename": [
                340
            ]
        },
        "EgressGateway": {
            "ipv4": [
                340
            ],
            "region": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "EgressGatewayCreateInput": {
            "environmentId": [
                340
            ],
            "region": [
                340
            ],
            "serviceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "EgressGatewayServiceTargetInput": {
            "environmentId": [
                340
            ],
            "serviceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "Environment": {
            "canAccess": [
                19
            ],
            "config": [
                76,
                {
                    "decryptVariables": [
                        19
                    ]
                }
            ],
            "createdAt": [
                46
            ],
            "deletedAt": [
                46
            ],
            "deploymentTriggers": [
                78,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "deployments": [
                80,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "id": [
                115
            ],
            "isEphemeral": [
                19
            ],
            "meta": [
                82
            ],
            "name": [
                340
            ],
            "projectId": [
                340
            ],
            "serviceInstances": [
                86,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "sourceEnvironment": [
                75
            ],
            "unmergedChangesCount": [
                118
            ],
            "updatedAt": [
                46
            ],
            "variables": [
                90,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "volumeInstances": [
                92,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentConfig": {},
        "EnvironmentCreateInput": {
            "applyChangesInBackground": [
                19
            ],
            "ephemeral": [
                19
            ],
            "name": [
                340
            ],
            "projectId": [
                340
            ],
            "skipInitialDeploys": [
                19
            ],
            "sourceEnvironmentId": [
                340
            ],
            "stageInitialChanges": [
                19
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentDeploymentTriggersConnection": {
            "edges": [
                79
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentDeploymentTriggersConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                64
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentDeploymentsConnection": {
            "edges": [
                81
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentDeploymentsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                47
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentMeta": {
            "baseBranch": [
                340
            ],
            "branch": [
                340
            ],
            "latestSuccessfulGitHubDeploymentId": [
                118
            ],
            "prCommentId": [
                118
            ],
            "prNumber": [
                118
            ],
            "prRepo": [
                340
            ],
            "prTitle": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentPatch": {
            "appliedAt": [
                46
            ],
            "appliedBy": [
                12
            ],
            "createdAt": [
                46
            ],
            "environment": [
                75
            ],
            "environmentId": [
                340
            ],
            "id": [
                115
            ],
            "lastAppliedError": [
                340
            ],
            "message": [
                340
            ],
            "patch": [
                76,
                {
                    "decryptVariables": [
                        19
                    ]
                }
            ],
            "status": [
                84
            ],
            "updatedAt": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentPatchStatus": {},
        "EnvironmentRenameInput": {
            "name": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentServiceInstancesConnection": {
            "edges": [
                87
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentServiceInstancesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                324
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentTriggersDeployInput": {
            "environmentId": [
                340
            ],
            "projectId": [
                340
            ],
            "serviceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentVariables": {},
        "EnvironmentVariablesConnection": {
            "edges": [
                91
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentVariablesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                405
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentVolumeInstancesConnection": {
            "edges": [
                93
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "EnvironmentVolumeInstancesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                414
            ],
            "__typename": [
                340
            ]
        },
        "EstimatedUsage": {
            "estimatedValue": [
                102
            ],
            "measurement": [
                136
            ],
            "projectId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "Event": {
            "action": [
                340
            ],
            "createdAt": [
                46
            ],
            "environment": [
                75
            ],
            "environmentId": [
                340
            ],
            "id": [
                115
            ],
            "object": [
                340
            ],
            "payload": [
                126
            ],
            "project": [
                197
            ],
            "projectId": [
                340
            ],
            "severity": [
                97
            ],
            "__typename": [
                340
            ]
        },
        "EventFilterInput": {
            "action": [
                98
            ],
            "object": [
                98
            ],
            "__typename": [
                340
            ]
        },
        "EventSeverity": {},
        "EventStringListFilter": {
            "in": [
                340
            ],
            "notIn": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ExplicitOwnerInput": {
            "id": [
                340
            ],
            "type": [
                311
            ],
            "__typename": [
                340
            ]
        },
        "ExternalWorkspace": {
            "allowDeprecatedRegions": [
                19
            ],
            "avatar": [
                340
            ],
            "banReason": [
                340
            ],
            "createdAt": [
                46
            ],
            "currentSessionHasAccess": [
                19
            ],
            "customerId": [
                340
            ],
            "customerState": [
                347
            ],
            "discordRole": [
                340
            ],
            "hasBAA": [
                19
            ],
            "hasRBAC": [
                19
            ],
            "hasSAML": [
                19
            ],
            "id": [
                340
            ],
            "isTrialing": [
                19
            ],
            "name": [
                340
            ],
            "plan": [
                175
            ],
            "preferredRegion": [
                340
            ],
            "projects": [
                197
            ],
            "supportTierOverride": [
                340
            ],
            "teamId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "FeatureFlagToggleInput": {
            "flag": [
                1
            ],
            "__typename": [
                340
            ]
        },
        "Float": {},
        "FunctionRuntime": {
            "image": [
                340
            ],
            "latestVersion": [
                105
            ],
            "name": [
                104
            ],
            "versions": [
                105
            ],
            "__typename": [
                340
            ]
        },
        "FunctionRuntimeName": {},
        "FunctionRuntimeVersion": {
            "image": [
                340
            ],
            "tag": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "GitHubAccess": {
            "hasAccess": [
                19
            ],
            "isPublic": [
                19
            ],
            "__typename": [
                340
            ]
        },
        "GitHubBranch": {
            "name": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "GitHubRepo": {
            "defaultBranch": [
                340
            ],
            "description": [
                340
            ],
            "fullName": [
                340
            ],
            "id": [
                118
            ],
            "installationId": [
                340
            ],
            "isPrivate": [
                19
            ],
            "name": [
                340
            ],
            "ownerAvatarUrl": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "GitHubRepoDeployInput": {
            "branch": [
                340
            ],
            "environmentId": [
                340
            ],
            "projectId": [
                340
            ],
            "repo": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "GitHubRepoUpdateInput": {
            "environmentId": [
                340
            ],
            "projectId": [
                340
            ],
            "serviceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "GitHubRepoWithoutInstallation": {
            "defaultBranch": [
                340
            ],
            "description": [
                340
            ],
            "fullName": [
                340
            ],
            "id": [
                118
            ],
            "isPrivate": [
                19
            ],
            "name": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "HerokuApp": {
            "id": [
                340
            ],
            "name": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "HerokuImportVariablesInput": {
            "environmentId": [
                340
            ],
            "herokuAppId": [
                340
            ],
            "projectId": [
                340
            ],
            "serviceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "HttpLog": {
            "clientUa": [
                340
            ],
            "deploymentId": [
                340
            ],
            "deploymentInstanceId": [
                340
            ],
            "downstreamProto": [
                340
            ],
            "edgeRegion": [
                340
            ],
            "host": [
                340
            ],
            "httpStatus": [
                118
            ],
            "method": [
                340
            ],
            "path": [
                340
            ],
            "requestId": [
                340
            ],
            "responseDetails": [
                340
            ],
            "rxBytes": [
                118
            ],
            "srcIp": [
                340
            ],
            "timestamp": [
                340
            ],
            "totalDuration": [
                118
            ],
            "txBytes": [
                118
            ],
            "upstreamAddress": [
                340
            ],
            "upstreamErrors": [
                340
            ],
            "upstreamProto": [
                340
            ],
            "upstreamRqDuration": [
                118
            ],
            "__typename": [
                340
            ]
        },
        "ID": {},
        "Incident": {
            "id": [
                340
            ],
            "message": [
                340
            ],
            "status": [
                117
            ],
            "url": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "IncidentStatus": {},
        "Int": {},
        "Integration": {
            "config": [
                126
            ],
            "id": [
                115
            ],
            "name": [
                340
            ],
            "projectId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "IntegrationAuth": {
            "id": [
                115
            ],
            "integrations": [
                121,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "provider": [
                340
            ],
            "providerId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "IntegrationAuthIntegrationsConnection": {
            "edges": [
                122
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "IntegrationAuthIntegrationsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                119
            ],
            "__typename": [
                340
            ]
        },
        "IntegrationCreateInput": {
            "config": [
                126
            ],
            "integrationAuthId": [
                340
            ],
            "name": [
                340
            ],
            "projectId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "IntegrationUpdateInput": {
            "config": [
                126
            ],
            "integrationAuthId": [
                340
            ],
            "name": [
                340
            ],
            "projectId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "InviteCode": {
            "code": [
                340
            ],
            "createdAt": [
                46
            ],
            "id": [
                115
            ],
            "project": [
                197
            ],
            "projectId": [
                340
            ],
            "role": [
                226
            ],
            "__typename": [
                340
            ]
        },
        "JSON": {},
        "JobApplicationCreateInput": {
            "email": [
                340
            ],
            "jobId": [
                340
            ],
            "name": [
                340
            ],
            "why": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "KeyType": {},
        "Log": {
            "attributes": [
                130
            ],
            "message": [
                340
            ],
            "severity": [
                340
            ],
            "tags": [
                131
            ],
            "timestamp": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "LogAttribute": {
            "key": [
                340
            ],
            "value": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "LogTags": {
            "deploymentId": [
                340
            ],
            "deploymentInstanceId": [
                340
            ],
            "environmentId": [
                340
            ],
            "pluginId": [
                340
            ],
            "projectId": [
                340
            ],
            "serviceId": [
                340
            ],
            "snapshotId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "LoginSessionAuthInput": {
            "code": [
                340
            ],
            "hostname": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "Maintenance": {
            "id": [
                340
            ],
            "message": [
                340
            ],
            "start": [
                46
            ],
            "status": [
                134
            ],
            "url": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "MaintenanceStatus": {},
        "Metric": {
            "ts": [
                118
            ],
            "value": [
                102
            ],
            "__typename": [
                340
            ]
        },
        "MetricMeasurement": {},
        "MetricTag": {},
        "MetricTags": {
            "deploymentId": [
                340
            ],
            "deploymentInstanceId": [
                340
            ],
            "environmentId": [
                340
            ],
            "pluginId": [
                340
            ],
            "projectId": [
                340
            ],
            "region": [
                340
            ],
            "serviceId": [
                340
            ],
            "volumeId": [
                340
            ],
            "volumeInstanceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "MetricsResult": {
            "measurement": [
                136
            ],
            "tags": [
                138
            ],
            "values": [
                135
            ],
            "__typename": [
                340
            ]
        },
        "MonitorAlertResourceType": {},
        "MonitorStatus": {},
        "MonitorThresholdCondition": {},
        "MonitorThresholdConfig": {
            "condition": [
                142
            ],
            "measurement": [
                136
            ],
            "threshold": [
                102
            ],
            "type": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "Mutation": {
            "apiTokenCreate": [
                340,
                {
                    "input": [
                        9,
                        "ApiTokenCreateInput!"
                    ]
                }
            ],
            "apiTokenDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "baseEnvironmentOverride": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        16,
                        "BaseEnvironmentOverrideInput!"
                    ]
                }
            ],
            "customDomainCreate": [
                32,
                {
                    "input": [
                        33,
                        "CustomDomainCreateInput!"
                    ]
                }
            ],
            "customDomainDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "customDomainUpdate": [
                19,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "id": [
                        340,
                        "String!"
                    ],
                    "targetPort": [
                        118
                    ]
                }
            ],
            "customerCreateFreePlanSubscription": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "customerTogglePayoutsToCredits": [
                19,
                {
                    "customerId": [
                        340,
                        "String!"
                    ],
                    "input": [
                        445,
                        "customerTogglePayoutsToCreditsInput!"
                    ]
                }
            ],
            "deploymentApprove": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "deploymentCancel": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "deploymentInstanceExecutionCreate": [
                19,
                {
                    "input": [
                        54,
                        "DeploymentInstanceExecutionCreateInput!"
                    ]
                }
            ],
            "deploymentRedeploy": [
                47,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "usePreviousImageTag": [
                        19
                    ]
                }
            ],
            "deploymentRemove": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "deploymentRestart": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "deploymentRollback": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "deploymentStop": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerCreate": [
                64,
                {
                    "input": [
                        65,
                        "DeploymentTriggerCreateInput!"
                    ]
                }
            ],
            "deploymentTriggerDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerUpdate": [
                64,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        66,
                        "DeploymentTriggerUpdateInput!"
                    ]
                }
            ],
            "dockerComposeImport": [
                68,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "projectId": [
                        340,
                        "String!"
                    ],
                    "skipStagingPatch": [
                        19
                    ],
                    "yaml": [
                        340,
                        "String!"
                    ]
                }
            ],
            "egressGatewayAssociationCreate": [
                72,
                {
                    "input": [
                        73,
                        "EgressGatewayCreateInput!"
                    ]
                }
            ],
            "egressGatewayAssociationsClear": [
                19,
                {
                    "input": [
                        74,
                        "EgressGatewayServiceTargetInput!"
                    ]
                }
            ],
            "emailChangeConfirm": [
                19,
                {
                    "nonce": [
                        340,
                        "String!"
                    ]
                }
            ],
            "emailChangeInitiate": [
                19,
                {
                    "newEmail": [
                        340,
                        "String!"
                    ]
                }
            ],
            "environmentCreate": [
                75,
                {
                    "input": [
                        77,
                        "EnvironmentCreateInput!"
                    ]
                }
            ],
            "environmentDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "environmentPatchCommit": [
                340,
                {
                    "commitMessage": [
                        340
                    ],
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "patch": [
                        76
                    ]
                }
            ],
            "environmentPatchCommitStaged": [
                340,
                {
                    "commitMessage": [
                        340
                    ],
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "skipDeploys": [
                        19
                    ]
                }
            ],
            "environmentRename": [
                75,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        85,
                        "EnvironmentRenameInput!"
                    ]
                }
            ],
            "environmentStageChanges": [
                83,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "input": [
                        76,
                        "EnvironmentConfig!"
                    ]
                }
            ],
            "environmentTriggersDeploy": [
                19,
                {
                    "input": [
                        88,
                        "EnvironmentTriggersDeployInput!"
                    ]
                }
            ],
            "fairUseAgree": [
                19,
                {
                    "agree": [
                        19,
                        "Boolean!"
                    ]
                }
            ],
            "featureFlagAdd": [
                19,
                {
                    "input": [
                        101,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "featureFlagRemove": [
                19,
                {
                    "input": [
                        101,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "githubRepoDeploy": [
                340,
                {
                    "input": [
                        109,
                        "GitHubRepoDeployInput!"
                    ]
                }
            ],
            "githubRepoUpdate": [
                19,
                {
                    "input": [
                        110,
                        "GitHubRepoUpdateInput!"
                    ]
                }
            ],
            "herokuImportVariables": [
                118,
                {
                    "input": [
                        113,
                        "HerokuImportVariablesInput!"
                    ]
                }
            ],
            "integrationCreate": [
                119,
                {
                    "input": [
                        123,
                        "IntegrationCreateInput!"
                    ]
                }
            ],
            "integrationDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "integrationUpdate": [
                119,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        124,
                        "IntegrationUpdateInput!"
                    ]
                }
            ],
            "inviteCodeUse": [
                197,
                {
                    "code": [
                        340,
                        "String!"
                    ]
                }
            ],
            "jobApplicationCreate": [
                19,
                {
                    "input": [
                        127,
                        "JobApplicationCreateInput!"
                    ],
                    "resume": [
                        387,
                        "Upload!"
                    ]
                }
            ],
            "loginSessionAuth": [
                19,
                {
                    "input": [
                        132,
                        "LoginSessionAuthInput!"
                    ]
                }
            ],
            "loginSessionCancel": [
                19,
                {
                    "code": [
                        340,
                        "String!"
                    ]
                }
            ],
            "loginSessionConsume": [
                340,
                {
                    "code": [
                        340,
                        "String!"
                    ]
                }
            ],
            "loginSessionCreate": [
                340
            ],
            "loginSessionVerify": [
                19,
                {
                    "code": [
                        340,
                        "String!"
                    ]
                }
            ],
            "notificationDeliveriesMarkAsRead": [
                19,
                {
                    "deliveryIds": [
                        340,
                        "[String!]!"
                    ]
                }
            ],
            "observabilityDashboardCreate": [
                19,
                {
                    "input": [
                        159,
                        "ObservabilityDashboardCreateInput!"
                    ]
                }
            ],
            "observabilityDashboardReset": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "observabilityDashboardUpdate": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        168,
                        "[ObservabilityDashboardUpdateInput!]!"
                    ]
                }
            ],
            "passkeyDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "pluginCreate": [
                181,
                {
                    "input": [
                        184,
                        "PluginCreateInput!"
                    ]
                }
            ],
            "pluginDelete": [
                19,
                {
                    "environmentId": [
                        340
                    ],
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "pluginReset": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        309,
                        "ResetPluginInput!"
                    ]
                }
            ],
            "pluginResetCredentials": [
                340,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        308,
                        "ResetPluginCredentialsInput!"
                    ]
                }
            ],
            "pluginRestart": [
                181,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        185,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginStart": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        185,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginUpdate": [
                181,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        188,
                        "PluginUpdateInput!"
                    ]
                }
            ],
            "preferencesUpdate": [
                191,
                {
                    "input": [
                        192,
                        "PreferencesUpdateData!"
                    ]
                }
            ],
            "privateNetworkCreateOrGet": [
                193,
                {
                    "input": [
                        194,
                        "PrivateNetworkCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointCreateOrGet": [
                195,
                {
                    "input": [
                        196,
                        "PrivateNetworkEndpointCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointRename": [
                19,
                {
                    "dnsName": [
                        340,
                        "String!"
                    ],
                    "id": [
                        340,
                        "String!"
                    ],
                    "privateNetworkId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "privateNetworksForEnvironmentDelete": [
                19,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectClaim": [
                197,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "workspaceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectCreate": [
                197,
                {
                    "input": [
                        201,
                        "ProjectCreateInput!"
                    ]
                }
            ],
            "projectDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectInvitationAccept": [
                220,
                {
                    "code": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectInvitationCreate": [
                211,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        214,
                        "ProjectInvitee!"
                    ]
                }
            ],
            "projectInvitationDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectInvitationResend": [
                211,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectInviteUser": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        213,
                        "ProjectInviteUserInput!"
                    ]
                }
            ],
            "projectLeave": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectMemberRemove": [
                215,
                {
                    "input": [
                        217,
                        "ProjectMemberRemoveInput!"
                    ]
                }
            ],
            "projectMemberUpdate": [
                215,
                {
                    "input": [
                        219,
                        "ProjectMemberUpdateInput!"
                    ]
                }
            ],
            "projectScheduleDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectScheduleDeleteCancel": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectScheduleDeleteForce": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectTokenCreate": [
                340,
                {
                    "input": [
                        230,
                        "ProjectTokenCreateInput!"
                    ]
                }
            ],
            "projectTokenDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectTransfer": [
                19,
                {
                    "input": [
                        233,
                        "ProjectTransferInput!"
                    ],
                    "projectId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectTransferConfirm": [
                19,
                {
                    "input": [
                        231,
                        "ProjectTransferConfirmInput!"
                    ]
                }
            ],
            "projectTransferInitiate": [
                19,
                {
                    "input": [
                        232,
                        "ProjectTransferInitiateInput!"
                    ]
                }
            ],
            "projectTransferToTeam": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        234,
                        "ProjectTransferToTeamInput!"
                    ]
                }
            ],
            "projectUpdate": [
                197,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        235,
                        "ProjectUpdateInput!"
                    ]
                }
            ],
            "providerAuthRemove": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "recoveryCodeGenerate": [
                295
            ],
            "recoveryCodeValidate": [
                19,
                {
                    "input": [
                        294,
                        "RecoveryCodeValidateInput!"
                    ]
                }
            ],
            "referralInfoUpdate": [
                296,
                {
                    "input": [
                        297,
                        "ReferralInfoUpdateInput!"
                    ]
                }
            ],
            "serviceConnect": [
                314,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        316,
                        "ServiceConnectInput!"
                    ]
                }
            ],
            "serviceCreate": [
                314,
                {
                    "input": [
                        317,
                        "ServiceCreateInput!"
                    ]
                }
            ],
            "serviceDelete": [
                19,
                {
                    "environmentId": [
                        340
                    ],
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceDisconnect": [
                314,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceDomainCreate": [
                320,
                {
                    "input": [
                        321,
                        "ServiceDomainCreateInput!"
                    ]
                }
            ],
            "serviceDomainDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceDomainUpdate": [
                19,
                {
                    "input": [
                        322,
                        "ServiceDomainUpdateInput!"
                    ]
                }
            ],
            "serviceDuplicate": [
                314,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceFeatureFlagAdd": [
                19,
                {
                    "input": [
                        323,
                        "ServiceFeatureFlagToggleInput!"
                    ]
                }
            ],
            "serviceFeatureFlagRemove": [
                19,
                {
                    "input": [
                        323,
                        "ServiceFeatureFlagToggleInput!"
                    ]
                }
            ],
            "serviceInstanceDeploy": [
                19,
                {
                    "commitSha": [
                        340
                    ],
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "latestCommit": [
                        19
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceDeployV2": [
                340,
                {
                    "commitSha": [
                        340
                    ],
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimitsUpdate": [
                19,
                {
                    "input": [
                        326,
                        "ServiceInstanceLimitsUpdateInput!"
                    ]
                }
            ],
            "serviceInstanceRedeploy": [
                19,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceUpdate": [
                19,
                {
                    "environmentId": [
                        340
                    ],
                    "input": [
                        327,
                        "ServiceInstanceUpdateInput!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceRemoveUpstreamUrl": [
                314,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceUpdate": [
                314,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        334,
                        "ServiceUpdateInput!"
                    ]
                }
            ],
            "sessionDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "sharedVariableConfigure": [
                405,
                {
                    "input": [
                        337,
                        "SharedVariableConfigureInput!"
                    ]
                }
            ],
            "tcpProxyCreate": [
                350,
                {
                    "input": [
                        351,
                        "TCPProxyCreateInput!"
                    ]
                }
            ],
            "tcpProxyDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "templateClone": [
                358,
                {
                    "input": [
                        359,
                        "TemplateCloneInput!"
                    ]
                }
            ],
            "templateDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        362,
                        "TemplateDeleteInput!"
                    ]
                }
            ],
            "templateDeploy": [
                364,
                {
                    "input": [
                        363,
                        "TemplateDeployInput!"
                    ]
                }
            ],
            "templateDeployV2": [
                364,
                {
                    "input": [
                        366,
                        "TemplateDeployV2Input!"
                    ]
                }
            ],
            "templateGenerate": [
                358,
                {
                    "input": [
                        367,
                        "TemplateGenerateInput!"
                    ]
                }
            ],
            "templatePublish": [
                358,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        371,
                        "TemplatePublishInput!"
                    ]
                }
            ],
            "templateServiceSourceEject": [
                19,
                {
                    "input": [
                        374,
                        "TemplateServiceSourceEjectInput!"
                    ]
                }
            ],
            "templateUnpublish": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "trustedDomainCreate": [
                19,
                {
                    "input": [
                        441,
                        "WorkspaceTrustedDomainCreateInput!"
                    ]
                }
            ],
            "trustedDomainDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "twoFactorInfoCreate": [
                295,
                {
                    "input": [
                        382,
                        "TwoFactorInfoCreateInput!"
                    ]
                }
            ],
            "twoFactorInfoDelete": [
                19
            ],
            "twoFactorInfoSecret": [
                383
            ],
            "twoFactorInfoValidate": [
                19,
                {
                    "input": [
                        384,
                        "TwoFactorInfoValidateInput!"
                    ]
                }
            ],
            "upsertSlackChannel": [
                19,
                {
                    "workspaceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "usageLimitRemove": [
                19,
                {
                    "input": [
                        389,
                        "UsageLimitRemoveInput!"
                    ]
                }
            ],
            "usageLimitSet": [
                19,
                {
                    "input": [
                        390,
                        "UsageLimitSetInput!"
                    ]
                }
            ],
            "userBetaLeave": [
                19
            ],
            "userDelete": [
                19
            ],
            "userDiscordDisconnect": [
                19
            ],
            "userFlagsRemove": [
                19,
                {
                    "input": [
                        393,
                        "UserFlagsRemoveInput!"
                    ]
                }
            ],
            "userFlagsSet": [
                19,
                {
                    "input": [
                        394,
                        "UserFlagsSetInput!"
                    ]
                }
            ],
            "userProfileUpdate": [
                19,
                {
                    "input": [
                        400,
                        "UserProfileUpdateInput!"
                    ]
                }
            ],
            "userTermsUpdate": [
                391
            ],
            "variableCollectionUpsert": [
                19,
                {
                    "input": [
                        406,
                        "VariableCollectionUpsertInput!"
                    ]
                }
            ],
            "variableDelete": [
                19,
                {
                    "input": [
                        407,
                        "VariableDeleteInput!"
                    ]
                }
            ],
            "variableUpsert": [
                19,
                {
                    "input": [
                        408,
                        "VariableUpsertInput!"
                    ]
                }
            ],
            "volumeCreate": [
                412,
                {
                    "input": [
                        413,
                        "VolumeCreateInput!"
                    ]
                }
            ],
            "volumeDelete": [
                19,
                {
                    "volumeId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupCreate": [
                427,
                {
                    "name": [
                        340
                    ],
                    "volumeInstanceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupDelete": [
                427,
                {
                    "volumeInstanceBackupId": [
                        340,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupLock": [
                19,
                {
                    "volumeInstanceBackupId": [
                        340,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupRestore": [
                427,
                {
                    "volumeInstanceBackupId": [
                        340,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupScheduleUpdate": [
                19,
                {
                    "kinds": [
                        417,
                        "[VolumeInstanceBackupScheduleKind!]!"
                    ],
                    "volumeInstanceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceUpdate": [
                19,
                {
                    "environmentId": [
                        340
                    ],
                    "input": [
                        419,
                        "VolumeInstanceUpdateInput!"
                    ],
                    "volumeId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "volumeUpdate": [
                412,
                {
                    "input": [
                        423,
                        "VolumeUpdateInput!"
                    ],
                    "volumeId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "workspaceDelete": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "workspaceInviteCodeCreate": [
                340,
                {
                    "input": [
                        436,
                        "WorkspaceInviteCodeCreateInput!"
                    ],
                    "workspaceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "workspaceInviteCodeUse": [
                430,
                {
                    "code": [
                        340,
                        "String!"
                    ]
                }
            ],
            "workspaceLeave": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "workspacePermissionChange": [
                19,
                {
                    "input": [
                        438,
                        "WorkspacePermissionChangeInput!"
                    ]
                }
            ],
            "workspaceUpdate": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "input": [
                        442,
                        "WorkspaceUpdateInput!"
                    ]
                }
            ],
            "workspaceUpsertSlackChannel": [
                19,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "workspaceUserInvite": [
                19,
                {
                    "input": [
                        443,
                        "WorkspaceUserInviteInput!"
                    ],
                    "workspaceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "workspaceUserRemove": [
                19,
                {
                    "input": [
                        444,
                        "WorkspaceUserRemoveInput!"
                    ],
                    "workspaceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                340
            ]
        },
        "Node": {
            "id": [
                115
            ],
            "on_AdoptionInfo": [
                4
            ],
            "on_ApiToken": [
                7
            ],
            "on_AuditLog": [
                13
            ],
            "on_Container": [
                29
            ],
            "on_Credit": [
                30
            ],
            "on_Customer": [
                35
            ],
            "on_Deployment": [
                47
            ],
            "on_DeploymentEvent": [
                50
            ],
            "on_DeploymentInstanceExecution": [
                53
            ],
            "on_DeploymentSnapshot": [
                60
            ],
            "on_DeploymentTrigger": [
                64
            ],
            "on_Environment": [
                75
            ],
            "on_EnvironmentPatch": [
                83
            ],
            "on_Event": [
                95
            ],
            "on_Integration": [
                119
            ],
            "on_IntegrationAuth": [
                120
            ],
            "on_InviteCode": [
                125
            ],
            "on_NotificationDelivery": [
                146
            ],
            "on_NotificationInstance": [
                153
            ],
            "on_ObservabilityDashboard": [
                157
            ],
            "on_ObservabilityDashboardAlert": [
                158
            ],
            "on_ObservabilityDashboardItem": [
                160
            ],
            "on_ObservabilityDashboardItemInstance": [
                164
            ],
            "on_ObservabilityDashboardMonitor": [
                166
            ],
            "on_Passkey": [
                172
            ],
            "on_PlanLimitOverride": [
                176
            ],
            "on_Plugin": [
                181
            ],
            "on_Preferences": [
                191
            ],
            "on_Project": [
                197
            ],
            "on_ProjectPermission": [
                220
            ],
            "on_ProjectToken": [
                229
            ],
            "on_ProviderAuth": [
                241
            ],
            "on_ReferralInfo": [
                296
            ],
            "on_Service": [
                314
            ],
            "on_ServiceInstance": [
                324
            ],
            "on_Session": [
                335
            ],
            "on_Team": [
                352
            ],
            "on_TeamPermission": [
                354
            ],
            "on_Template": [
                358
            ],
            "on_TemplateService": [
                372
            ],
            "on_UsageLimit": [
                388
            ],
            "on_User": [
                391
            ],
            "on_Variable": [
                405
            ],
            "on_Volume": [
                412
            ],
            "on_VolumeInstance": [
                414
            ],
            "on_VolumeInstanceBackupSchedule": [
                416
            ],
            "on_Workspace": [
                430
            ],
            "on_WorkspaceIdentityProvider": [
                433
            ],
            "__typename": [
                340
            ]
        },
        "NotificationDelivery": {
            "createdAt": [
                46
            ],
            "id": [
                115
            ],
            "notificationInstance": [
                153
            ],
            "readAt": [
                46
            ],
            "status": [
                150
            ],
            "type": [
                151
            ],
            "updatedAt": [
                46
            ],
            "userId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "NotificationDeliveryCreated": {
            "delivery": [
                146
            ],
            "type": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "NotificationDeliveryFilterInput": {
            "environmentId": [
                340
            ],
            "onlyUnread": [
                19
            ],
            "projectId": [
                340
            ],
            "status": [
                156
            ],
            "type": [
                151
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "NotificationDeliveryResolved": {
            "deliveryIds": [
                340
            ],
            "type": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "NotificationDeliveryStatus": {},
        "NotificationDeliveryType": {},
        "NotificationDeliveryUpdate": {
            "on_NotificationDeliveryCreated": [
                147
            ],
            "on_NotificationDeliveryResolved": [
                149
            ],
            "__typename": [
                340
            ]
        },
        "NotificationInstance": {
            "createdAt": [
                46
            ],
            "environmentId": [
                340
            ],
            "event": [
                95
            ],
            "eventId": [
                340
            ],
            "eventType": [
                340
            ],
            "id": [
                115
            ],
            "payload": [
                154
            ],
            "projectId": [
                340
            ],
            "resolvedAt": [
                46
            ],
            "resourceId": [
                340
            ],
            "resourceType": [
                340
            ],
            "serviceId": [
                340
            ],
            "severity": [
                155
            ],
            "status": [
                156
            ],
            "updatedAt": [
                46
            ],
            "volumeId": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "NotificationPayload": {},
        "NotificationSeverity": {},
        "NotificationStatus": {},
        "ObservabilityDashboard": {
            "id": [
                115
            ],
            "items": [
                164
            ],
            "__typename": [
                340
            ]
        },
        "ObservabilityDashboardAlert": {
            "createdAt": [
                46
            ],
            "id": [
                115
            ],
            "resolvedAt": [
                46
            ],
            "resourceId": [
                340
            ],
            "resourceType": [
                140
            ],
            "status": [
                141
            ],
            "__typename": [
                340
            ]
        },
        "ObservabilityDashboardCreateInput": {
            "environmentId": [
                340
            ],
            "items": [
                168
            ],
            "__typename": [
                340
            ]
        },
        "ObservabilityDashboardItem": {
            "config": [
                161
            ],
            "description": [
                340
            ],
            "id": [
                115
            ],
            "monitors": [
                166
            ],
            "name": [
                340
            ],
            "type": [
                165
            ],
            "__typename": [
                340
            ]
        },
        "ObservabilityDashboardItemConfig": {
            "logsFilter": [
                340
            ],
            "measurements": [
                136
            ],
            "projectUsageProperties": [
                236
            ],
            "resourceIds": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ObservabilityDashboardItemConfigInput": {
            "logsFilter": [
                340
            ],
            "measurements": [
                136
            ],
            "projectUsageProperties": [
                236
            ],
            "resourceIds": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ObservabilityDashboardItemCreateInput": {
            "config": [
                162
            ],
            "description": [
                340
            ],
            "id": [
                340
            ],
            "name": [
                340
            ],
            "type": [
                165
            ],
            "__typename": [
                340
            ]
        },
        "ObservabilityDashboardItemInstance": {
            "dashboardItem": [
                160
            ],
            "displayConfig": [
                67
            ],
            "id": [
                115
            ],
            "__typename": [
                340
            ]
        },
        "ObservabilityDashboardItemType": {},
        "ObservabilityDashboardMonitor": {
            "alerts": [
                158,
                {
                    "endDate": [
                        46
                    ],
                    "startDate": [
                        46
                    ]
                }
            ],
            "config": [
                167
            ],
            "createdAt": [
                46
            ],
            "id": [
                115
            ],
            "updatedAt": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "ObservabilityDashboardMonitorConfig": {
            "on_MonitorThresholdConfig": [
                143
            ],
            "__typename": [
                340
            ]
        },
        "ObservabilityDashboardUpdateInput": {
            "dashboardItem": [
                163
            ],
            "displayConfig": [
                67
            ],
            "id": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "PageInfo": {
            "endCursor": [
                340
            ],
            "hasNextPage": [
                19
            ],
            "hasPreviousPage": [
                19
            ],
            "startCursor": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "PartnerProfile": {
            "category": [
                340
            ],
            "description": [
                340
            ],
            "slug": [
                340
            ],
            "type": [
                171
            ],
            "website": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "PartnerProfileType": {},
        "Passkey": {
            "aaguid": [
                340
            ],
            "backedUp": [
                19
            ],
            "createdAt": [
                46
            ],
            "credentialId": [
                340
            ],
            "deviceName": [
                340
            ],
            "deviceType": [
                340
            ],
            "displayName": [
                340
            ],
            "id": [
                115
            ],
            "lastUsedAt": [
                46
            ],
            "lastUsedDevice": [
                340
            ],
            "transports": [
                340
            ],
            "updatedAt": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "PaymentMethod": {
            "card": [
                174
            ],
            "id": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "PaymentMethodCard": {
            "brand": [
                340
            ],
            "country": [
                340
            ],
            "last4": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "Plan": {},
        "PlanLimitOverride": {
            "config": [
                345
            ],
            "id": [
                115
            ],
            "__typename": [
                340
            ]
        },
        "PlatformFeatureFlag": {},
        "PlatformFeatureFlagStatus": {
            "flag": [
                177
            ],
            "rolloutPercentage": [
                118
            ],
            "status": [
                19
            ],
            "type": [
                179
            ],
            "__typename": [
                340
            ]
        },
        "PlatformFeatureFlagType": {},
        "PlatformStatus": {
            "incident": [
                116
            ],
            "isStable": [
                19
            ],
            "maintenance": [
                133
            ],
            "__typename": [
                340
            ]
        },
        "Plugin": {
            "containers": [
                182,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "createdAt": [
                46
            ],
            "deletedAt": [
                46
            ],
            "deprecatedAt": [
                46
            ],
            "friendlyName": [
                340
            ],
            "id": [
                115
            ],
            "logsEnabled": [
                19
            ],
            "migrationDatabaseServiceId": [
                340
            ],
            "name": [
                187
            ],
            "project": [
                197
            ],
            "status": [
                186
            ],
            "variables": [
                189,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "__typename": [
                340
            ]
        },
        "PluginContainersConnection": {
            "edges": [
                183
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "PluginContainersConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                29
            ],
            "__typename": [
                340
            ]
        },
        "PluginCreateInput": {
            "environmentId": [
                340
            ],
            "friendlyName": [
                340
            ],
            "name": [
                340
            ],
            "projectId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "PluginRestartInput": {
            "environmentId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "PluginStatus": {},
        "PluginType": {},
        "PluginUpdateInput": {
            "friendlyName": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "PluginVariablesConnection": {
            "edges": [
                190
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "PluginVariablesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                405
            ],
            "__typename": [
                340
            ]
        },
        "Preferences": {
            "buildFailedEmail": [
                19
            ],
            "changelogEmail": [
                19
            ],
            "communityEmail": [
                19
            ],
            "deployCrashedEmail": [
                19
            ],
            "ephemeralEnvironmentEmail": [
                19
            ],
            "id": [
                115
            ],
            "marketingEmail": [
                19
            ],
            "subprocessorUpdatesEmail": [
                19
            ],
            "templateQueueEmail": [
                19
            ],
            "usageEmail": [
                19
            ],
            "__typename": [
                340
            ]
        },
        "PreferencesUpdateData": {
            "buildFailedEmail": [
                19
            ],
            "changelogEmail": [
                19
            ],
            "communityEmail": [
                19
            ],
            "deployCrashedEmail": [
                19
            ],
            "ephemeralEnvironmentEmail": [
                19
            ],
            "marketingEmail": [
                19
            ],
            "subprocessorUpdatesEmail": [
                19
            ],
            "templateQueueEmail": [
                19
            ],
            "token": [
                340
            ],
            "usageEmail": [
                19
            ],
            "__typename": [
                340
            ]
        },
        "PrivateNetwork": {
            "createdAt": [
                46
            ],
            "deletedAt": [
                46
            ],
            "dnsName": [
                340
            ],
            "environmentId": [
                340
            ],
            "name": [
                340
            ],
            "networkId": [
                17
            ],
            "projectId": [
                340
            ],
            "publicId": [
                340
            ],
            "tags": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "PrivateNetworkCreateOrGetInput": {
            "environmentId": [
                340
            ],
            "name": [
                340
            ],
            "projectId": [
                340
            ],
            "tags": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "PrivateNetworkEndpoint": {
            "createdAt": [
                46
            ],
            "deletedAt": [
                46
            ],
            "dnsName": [
                340
            ],
            "privateIps": [
                340
            ],
            "publicId": [
                340
            ],
            "serviceInstanceId": [
                340
            ],
            "tags": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "PrivateNetworkEndpointCreateOrGetInput": {
            "environmentId": [
                340
            ],
            "privateNetworkId": [
                340
            ],
            "serviceId": [
                340
            ],
            "serviceName": [
                340
            ],
            "tags": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "Project": {
            "baseEnvironment": [
                75
            ],
            "baseEnvironmentId": [
                340
            ],
            "botPrEnvironments": [
                19
            ],
            "buckets": [
                198,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "createdAt": [
                46
            ],
            "deletedAt": [
                46
            ],
            "deploymentTriggers": [
                203,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "deployments": [
                205,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "description": [
                340
            ],
            "environments": [
                207,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "expiredAt": [
                46
            ],
            "groups": [
                209,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "id": [
                115
            ],
            "isPublic": [
                19
            ],
            "isTempProject": [
                19
            ],
            "members": [
                215
            ],
            "name": [
                340
            ],
            "plugins": [
                221,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "prDeploys": [
                19
            ],
            "projectPermissions": [
                223,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "services": [
                227,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "subscriptionPlanLimit": [
                345
            ],
            "subscriptionType": [
                346
            ],
            "team": [
                352
            ],
            "teamId": [
                340
            ],
            "updatedAt": [
                46
            ],
            "volumes": [
                237,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "workspace": [
                430
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectBucketsConnection": {
            "edges": [
                199
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "ProjectBucketsConnectionEdge": {
            "cursor": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectComplianceInfo": {
            "memberPermissions": [
                216
            ],
            "projectId": [
                340
            ],
            "projectName": [
                340
            ],
            "serviceBackups": [
                315
            ],
            "twoFactorMembers": [
                218
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectCreateInput": {
            "defaultEnvironmentName": [
                340
            ],
            "description": [
                340
            ],
            "isMonorepo": [
                19
            ],
            "isPublic": [
                19
            ],
            "name": [
                340
            ],
            "prDeploys": [
                19
            ],
            "repo": [
                202
            ],
            "runtime": [
                244
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectCreateRepo": {
            "branch": [
                340
            ],
            "fullRepoName": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectDeploymentTriggersConnection": {
            "edges": [
                204
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "ProjectDeploymentTriggersConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                64
            ],
            "__typename": [
                340
            ]
        },
        "ProjectDeploymentsConnection": {
            "edges": [
                206
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "ProjectDeploymentsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                47
            ],
            "__typename": [
                340
            ]
        },
        "ProjectEnvironmentsConnection": {
            "edges": [
                208
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "ProjectEnvironmentsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                75
            ],
            "__typename": [
                340
            ]
        },
        "ProjectGroupsConnection": {
            "edges": [
                210
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "ProjectGroupsConnectionEdge": {
            "cursor": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectInvitation": {
            "email": [
                340
            ],
            "expiresAt": [
                46
            ],
            "id": [
                115
            ],
            "inviter": [
                212
            ],
            "isExpired": [
                19
            ],
            "project": [
                242
            ],
            "__typename": [
                340
            ]
        },
        "ProjectInvitationInviter": {
            "email": [
                340
            ],
            "name": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectInviteUserInput": {
            "email": [
                340
            ],
            "link": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectInvitee": {
            "email": [
                340
            ],
            "role": [
                226
            ],
            "__typename": [
                340
            ]
        },
        "ProjectMember": {
            "avatar": [
                340
            ],
            "email": [
                340
            ],
            "id": [
                340
            ],
            "name": [
                340
            ],
            "role": [
                226
            ],
            "__typename": [
                340
            ]
        },
        "ProjectMemberPermissionsInfo": {
            "email": [
                340
            ],
            "name": [
                340
            ],
            "role": [
                226
            ],
            "__typename": [
                340
            ]
        },
        "ProjectMemberRemoveInput": {
            "projectId": [
                340
            ],
            "userId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectMemberTwoFactorInfo": {
            "email": [
                340
            ],
            "enabledMethods": [
                385
            ],
            "name": [
                340
            ],
            "twoFactorAuthEnabled": [
                19
            ],
            "__typename": [
                340
            ]
        },
        "ProjectMemberUpdateInput": {
            "projectId": [
                340
            ],
            "role": [
                226
            ],
            "userId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectPermission": {
            "id": [
                115
            ],
            "projectId": [
                340
            ],
            "role": [
                226
            ],
            "userId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectPluginsConnection": {
            "edges": [
                222
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "ProjectPluginsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                181
            ],
            "__typename": [
                340
            ]
        },
        "ProjectProjectPermissionsConnection": {
            "edges": [
                224
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "ProjectProjectPermissionsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                220
            ],
            "__typename": [
                340
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
                340
            ]
        },
        "ProjectRole": {},
        "ProjectServicesConnection": {
            "edges": [
                228
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "ProjectServicesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                314
            ],
            "__typename": [
                340
            ]
        },
        "ProjectToken": {
            "createdAt": [
                46
            ],
            "displayToken": [
                340
            ],
            "environment": [
                75
            ],
            "environmentId": [
                340
            ],
            "id": [
                115
            ],
            "name": [
                340
            ],
            "project": [
                197
            ],
            "projectId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectTokenCreateInput": {
            "environmentId": [
                340
            ],
            "name": [
                340
            ],
            "projectId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectTransferConfirmInput": {
            "destinationWorkspaceId": [
                340
            ],
            "ownershipTransferId": [
                340
            ],
            "projectId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectTransferInitiateInput": {
            "memberId": [
                340
            ],
            "projectId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectTransferInput": {
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectTransferToTeamInput": {
            "teamId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProjectUpdateInput": {
            "baseEnvironmentId": [
                340
            ],
            "botPrEnvironments": [
                19
            ],
            "description": [
                340
            ],
            "isPublic": [
                19
            ],
            "name": [
                340
            ],
            "prDeploys": [
                19
            ],
            "__typename": [
                340
            ]
        },
        "ProjectUsageProperty": {},
        "ProjectVolumesConnection": {
            "edges": [
                238
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "ProjectVolumesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                412
            ],
            "__typename": [
                340
            ]
        },
        "ProjectWorkspaceMember": {
            "email": [
                340
            ],
            "enabledMethods": [
                386
            ],
            "name": [
                340
            ],
            "twoFactorAuthEnabled": [
                19
            ],
            "__typename": [
                340
            ]
        },
        "ProjectWorkspaceMembersResponse": {
            "members": [
                239
            ],
            "projectId": [
                340
            ],
            "projectName": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ProviderAuth": {
            "email": [
                340
            ],
            "id": [
                115
            ],
            "isAuthEnabled": [
                19
            ],
            "metadata": [
                126
            ],
            "provider": [
                340
            ],
            "userId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "PublicProjectInformation": {
            "id": [
                115
            ],
            "name": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "PublicProjectInvitation": {
            "on_InviteCode": [
                125
            ],
            "on_ProjectInvitation": [
                211
            ],
            "on_Node": [
                145
            ],
            "__typename": [
                340
            ]
        },
        "PublicRuntime": {},
        "PublicStats": {
            "totalDeploymentsLastMonth": [
                118
            ],
            "totalLogsLastMonth": [
                17
            ],
            "totalProjects": [
                118
            ],
            "totalRequestsLastMonth": [
                17
            ],
            "totalServices": [
                118
            ],
            "totalUsers": [
                118
            ],
            "__typename": [
                340
            ]
        },
        "Query": {
            "adminVolumeInstancesForVolume": [
                414,
                {
                    "volumeId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "allPlatformFeatureFlags": [
                178
            ],
            "apiToken": [
                8
            ],
            "apiTokens": [
                247,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "auditLog": [
                13,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "workspaceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "auditLogEventTypeInfo": [
                14
            ],
            "auditLogs": [
                249,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "filter": [
                        15
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ],
                    "sort": [
                        339
                    ],
                    "workspaceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "buildLogs": [
                129,
                {
                    "deploymentId": [
                        340,
                        "String!"
                    ],
                    "endDate": [
                        46
                    ],
                    "filter": [
                        340
                    ],
                    "limit": [
                        118
                    ],
                    "startDate": [
                        46
                    ]
                }
            ],
            "changelogBlockImage": [
                340,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "complianceAgreements": [
                28,
                {
                    "workspaceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "customDomain": [
                32,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "projectId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "customDomainAvailable": [
                70,
                {
                    "domain": [
                        340,
                        "String!"
                    ]
                }
            ],
            "deployment": [
                47,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "deploymentEvents": [
                251,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "id": [
                        340,
                        "String!"
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "deploymentInstanceExecutions": [
                253,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "input": [
                        56,
                        "DeploymentInstanceExecutionListInput!"
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "deploymentLogs": [
                129,
                {
                    "deploymentId": [
                        340,
                        "String!"
                    ],
                    "endDate": [
                        46
                    ],
                    "filter": [
                        340
                    ],
                    "limit": [
                        118
                    ],
                    "startDate": [
                        46
                    ]
                }
            ],
            "deploymentSnapshot": [
                60,
                {
                    "deploymentId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggers": [
                255,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ],
                    "projectId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "deployments": [
                257,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "input": [
                        58,
                        "DeploymentListInput!"
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "domainStatus": [
                71,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "projectId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "domains": [
                6,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "projectId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "egressGateways": [
                72,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "environment": [
                75,
                {
                    "id": [
                        340,
                        "String!"
                    ],
                    "projectId": [
                        340
                    ]
                }
            ],
            "environmentLogs": [
                129,
                {
                    "afterDate": [
                        340
                    ],
                    "afterLimit": [
                        118
                    ],
                    "anchorDate": [
                        340
                    ],
                    "beforeDate": [
                        340
                    ],
                    "beforeLimit": [
                        118
                    ],
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "filter": [
                        340
                    ]
                }
            ],
            "environmentPatch": [
                83,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "environmentPatches": [
                259,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "environmentStagedChanges": [
                83,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "environments": [
                261,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "isEphemeral": [
                        19
                    ],
                    "last": [
                        118
                    ],
                    "projectId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "estimatedUsage": [
                94,
                {
                    "includeDeleted": [
                        19
                    ],
                    "measurements": [
                        136,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        340
                    ],
                    "workspaceId": [
                        340
                    ]
                }
            ],
            "events": [
                263,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "environmentId": [
                        340
                    ],
                    "filter": [
                        96
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ],
                    "projectId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "externalWorkspaces": [
                100,
                {
                    "projectId": [
                        340
                    ]
                }
            ],
            "functionRuntime": [
                103,
                {
                    "name": [
                        104,
                        "FunctionRuntimeName!"
                    ]
                }
            ],
            "functionRuntimes": [
                103
            ],
            "gitHubRepoAccessAvailable": [
                106,
                {
                    "fullRepoName": [
                        340,
                        "String!"
                    ]
                }
            ],
            "githubIsRepoNameAvailable": [
                19,
                {
                    "fullRepoName": [
                        340,
                        "String!"
                    ]
                }
            ],
            "githubRepo": [
                111,
                {
                    "fullRepoName": [
                        340,
                        "String!"
                    ]
                }
            ],
            "githubRepoBranches": [
                107,
                {
                    "owner": [
                        340,
                        "String!"
                    ],
                    "repo": [
                        340,
                        "String!"
                    ]
                }
            ],
            "githubRepos": [
                108
            ],
            "githubWritableScopes": [
                340
            ],
            "herokuApps": [
                112
            ],
            "httpLogs": [
                114,
                {
                    "afterDate": [
                        340
                    ],
                    "afterLimit": [
                        118
                    ],
                    "anchorDate": [
                        340
                    ],
                    "beforeDate": [
                        340
                    ],
                    "beforeLimit": [
                        118
                    ],
                    "deploymentId": [
                        340,
                        "String!"
                    ],
                    "endDate": [
                        340
                    ],
                    "filter": [
                        340
                    ],
                    "limit": [
                        118
                    ],
                    "startDate": [
                        340
                    ]
                }
            ],
            "integrationAuth": [
                120,
                {
                    "provider": [
                        340,
                        "String!"
                    ],
                    "providerId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "integrationAuths": [
                265,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "integrations": [
                267,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ],
                    "projectId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "inviteCode": [
                125,
                {
                    "code": [
                        340,
                        "String!"
                    ]
                }
            ],
            "me": [
                391
            ],
            "metrics": [
                139,
                {
                    "averagingWindowSeconds": [
                        118
                    ],
                    "endDate": [
                        46
                    ],
                    "environmentId": [
                        340
                    ],
                    "groupBy": [
                        137,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        19
                    ],
                    "measurements": [
                        136,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        340
                    ],
                    "sampleRateSeconds": [
                        118
                    ],
                    "serviceId": [
                        340
                    ],
                    "startDate": [
                        46,
                        "DateTime!"
                    ],
                    "volumeId": [
                        340
                    ],
                    "volumeInstanceExternalId": [
                        340
                    ],
                    "workspaceId": [
                        340
                    ]
                }
            ],
            "notificationDeliveries": [
                269,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "filter": [
                        148
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "observabilityDashboards": [
                271,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "passkeys": [
                273,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "platformStatus": [
                180
            ],
            "plugin": [
                181,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "pluginLogs": [
                129,
                {
                    "endDate": [
                        46
                    ],
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "filter": [
                        340
                    ],
                    "limit": [
                        118
                    ],
                    "pluginId": [
                        340,
                        "String!"
                    ],
                    "startDate": [
                        46
                    ]
                }
            ],
            "preferences": [
                191,
                {
                    "token": [
                        340
                    ]
                }
            ],
            "privateNetworkEndpoint": [
                195,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "privateNetworkId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointNameAvailable": [
                19,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "prefix": [
                        340,
                        "String!"
                    ],
                    "privateNetworkId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "privateNetworks": [
                193,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "project": [
                197,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectCompliance": [
                200,
                {
                    "projectId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectInvitation": [
                243,
                {
                    "code": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectInvitations": [
                211,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectInviteCode": [
                125,
                {
                    "projectId": [
                        340,
                        "String!"
                    ],
                    "role": [
                        226,
                        "ProjectRole!"
                    ]
                }
            ],
            "projectMembers": [
                215,
                {
                    "projectId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectResourceAccess": [
                225,
                {
                    "projectId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectToken": [
                229
            ],
            "projectTokens": [
                275,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ],
                    "projectId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projectWorkspaceMembers": [
                240,
                {
                    "projectId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "projects": [
                277,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "includeDeleted": [
                        19
                    ],
                    "last": [
                        118
                    ],
                    "userId": [
                        340
                    ],
                    "workspaceId": [
                        340
                    ]
                }
            ],
            "publicStats": [
                245
            ],
            "referralInfo": [
                296,
                {
                    "workspaceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "regions": [
                301,
                {
                    "projectId": [
                        340
                    ]
                }
            ],
            "resourceAccess": [
                310,
                {
                    "explicitResourceOwner": [
                        99,
                        "ExplicitOwnerInput!"
                    ]
                }
            ],
            "service": [
                314,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceDomainAvailable": [
                70,
                {
                    "domain": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceInstance": [
                324,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceIsUpdatable": [
                19,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimitOverride": [
                325,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimits": [
                325,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "sessions": [
                279,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "tcpProxies": [
                350,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "team": [
                352,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "teamTemplates": [
                281,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ],
                    "teamId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "template": [
                358,
                {
                    "code": [
                        340
                    ],
                    "id": [
                        340
                    ],
                    "owner": [
                        340
                    ],
                    "repo": [
                        340
                    ]
                }
            ],
            "templateMetrics": [
                370,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "templateSourceForProject": [
                358,
                {
                    "projectId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "templates": [
                283,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ],
                    "recommended": [
                        19
                    ],
                    "verified": [
                        19
                    ]
                }
            ],
            "templatesCount": [
                118
            ],
            "trustedDomains": [
                285,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ],
                    "workspaceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "twoFactorInfo": [
                381
            ],
            "usage": [
                5,
                {
                    "endDate": [
                        46
                    ],
                    "groupBy": [
                        137,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        19
                    ],
                    "measurements": [
                        136,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        340
                    ],
                    "startDate": [
                        46
                    ],
                    "workspaceId": [
                        340
                    ]
                }
            ],
            "userKickbackEarnings": [
                395,
                {
                    "userId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "userProfile": [
                397,
                {
                    "username": [
                        340,
                        "String!"
                    ]
                }
            ],
            "userTemplates": [
                287,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "variables": [
                89,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "projectId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340
                    ],
                    "unrendered": [
                        19
                    ]
                }
            ],
            "variablesForServiceDeployment": [
                89,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "projectId": [
                        340,
                        "String!"
                    ],
                    "serviceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "vercelInfo": [
                410
            ],
            "volumeInstance": [
                414,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupList": [
                415,
                {
                    "volumeInstanceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupScheduleList": [
                416,
                {
                    "volumeInstanceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "workflowStatus": [
                428,
                {
                    "workflowId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "workspace": [
                430,
                {
                    "workspaceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "workspaceByCode": [
                430,
                {
                    "code": [
                        340,
                        "String!"
                    ]
                }
            ],
            "workspaceIdentityProviders": [
                289,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ],
                    "workspaceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "workspaceTemplates": [
                291,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ],
                    "workspaceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                340
            ]
        },
        "QueryApiTokensConnection": {
            "edges": [
                248
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryApiTokensConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                7
            ],
            "__typename": [
                340
            ]
        },
        "QueryAuditLogsConnection": {
            "edges": [
                250
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryAuditLogsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                13
            ],
            "__typename": [
                340
            ]
        },
        "QueryDeploymentEventsConnection": {
            "edges": [
                252
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryDeploymentEventsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                50
            ],
            "__typename": [
                340
            ]
        },
        "QueryDeploymentInstanceExecutionsConnection": {
            "edges": [
                254
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryDeploymentInstanceExecutionsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                53
            ],
            "__typename": [
                340
            ]
        },
        "QueryDeploymentTriggersConnection": {
            "edges": [
                256
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryDeploymentTriggersConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                64
            ],
            "__typename": [
                340
            ]
        },
        "QueryDeploymentsConnection": {
            "edges": [
                258
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryDeploymentsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                47
            ],
            "__typename": [
                340
            ]
        },
        "QueryEnvironmentPatchesConnection": {
            "edges": [
                260
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryEnvironmentPatchesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                83
            ],
            "__typename": [
                340
            ]
        },
        "QueryEnvironmentsConnection": {
            "edges": [
                262
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryEnvironmentsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                75
            ],
            "__typename": [
                340
            ]
        },
        "QueryEventsConnection": {
            "edges": [
                264
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryEventsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                95
            ],
            "__typename": [
                340
            ]
        },
        "QueryIntegrationAuthsConnection": {
            "edges": [
                266
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryIntegrationAuthsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                120
            ],
            "__typename": [
                340
            ]
        },
        "QueryIntegrationsConnection": {
            "edges": [
                268
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryIntegrationsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                119
            ],
            "__typename": [
                340
            ]
        },
        "QueryNotificationDeliveriesConnection": {
            "edges": [
                270
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryNotificationDeliveriesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                146
            ],
            "__typename": [
                340
            ]
        },
        "QueryObservabilityDashboardsConnection": {
            "edges": [
                272
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryObservabilityDashboardsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                157
            ],
            "__typename": [
                340
            ]
        },
        "QueryPasskeysConnection": {
            "edges": [
                274
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryPasskeysConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                172
            ],
            "__typename": [
                340
            ]
        },
        "QueryProjectTokensConnection": {
            "edges": [
                276
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryProjectTokensConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                229
            ],
            "__typename": [
                340
            ]
        },
        "QueryProjectsConnection": {
            "edges": [
                278
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryProjectsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                197
            ],
            "__typename": [
                340
            ]
        },
        "QuerySessionsConnection": {
            "edges": [
                280
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QuerySessionsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                335
            ],
            "__typename": [
                340
            ]
        },
        "QueryTeamTemplatesConnection": {
            "edges": [
                282
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryTeamTemplatesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                358
            ],
            "__typename": [
                340
            ]
        },
        "QueryTemplatesConnection": {
            "edges": [
                284
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryTemplatesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                358
            ],
            "__typename": [
                340
            ]
        },
        "QueryTrustedDomainsConnection": {
            "edges": [
                286
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryTrustedDomainsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                379
            ],
            "__typename": [
                340
            ]
        },
        "QueryUserTemplatesConnection": {
            "edges": [
                288
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryUserTemplatesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                358
            ],
            "__typename": [
                340
            ]
        },
        "QueryWorkspaceIdentityProvidersConnection": {
            "edges": [
                290
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryWorkspaceIdentityProvidersConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                433
            ],
            "__typename": [
                340
            ]
        },
        "QueryWorkspaceTemplatesConnection": {
            "edges": [
                292
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "QueryWorkspaceTemplatesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                358
            ],
            "__typename": [
                340
            ]
        },
        "RailpackInfo": {},
        "RecoveryCodeValidateInput": {
            "code": [
                340
            ],
            "twoFactorLinkingKey": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "RecoveryCodes": {
            "recoveryCodes": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ReferralInfo": {
            "code": [
                340
            ],
            "id": [
                115
            ],
            "referralStats": [
                298
            ],
            "status": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ReferralInfoUpdateInput": {
            "code": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ReferralStats": {
            "credited": [
                118
            ],
            "pending": [
                118
            ],
            "__typename": [
                340
            ]
        },
        "ReferralStatus": {},
        "ReferralUser": {
            "code": [
                340
            ],
            "id": [
                340
            ],
            "status": [
                299
            ],
            "__typename": [
                340
            ]
        },
        "Region": {
            "country": [
                340
            ],
            "deploymentConstraints": [
                302
            ],
            "location": [
                340
            ],
            "name": [
                340
            ],
            "railwayMetal": [
                19
            ],
            "region": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "RegionDeploymentConstraints": {
            "adminOnly": [
                19
            ],
            "deprecationInfo": [
                303
            ],
            "runtimeExclusivity": [
                340
            ],
            "stagingOnly": [
                19
            ],
            "__typename": [
                340
            ]
        },
        "RegionDeprecationInfo": {
            "isDeprecated": [
                19
            ],
            "replacementRegion": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "RegistrationStatus": {},
        "RegistryCredentialsInput": {
            "password": [
                340
            ],
            "username": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ReplicateVolumeInstanceSnapshotStatus": {},
        "ReplicateVolumeInstanceStatus": {},
        "ResetPluginCredentialsInput": {
            "environmentId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ResetPluginInput": {
            "environmentId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ResourceAccess": {
            "deployment": [
                0
            ],
            "project": [
                0
            ],
            "__typename": [
                340
            ]
        },
        "ResourceOwnerType": {},
        "RestartPolicyType": {},
        "SerializedTemplateConfig": {},
        "Service": {
            "createdAt": [
                46
            ],
            "deletedAt": [
                46
            ],
            "deployments": [
                318,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "featureFlags": [
                3
            ],
            "icon": [
                340
            ],
            "id": [
                115
            ],
            "name": [
                340
            ],
            "project": [
                197
            ],
            "projectId": [
                340
            ],
            "repoTriggers": [
                328,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "serviceInstances": [
                330,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "templateServiceId": [
                340
            ],
            "templateThreadSlug": [
                340
            ],
            "updatedAt": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "ServiceBackupInfo": {
            "schedules": [
                417
            ],
            "serviceId": [
                340
            ],
            "serviceName": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ServiceConnectInput": {
            "branch": [
                340
            ],
            "image": [
                340
            ],
            "repo": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ServiceCreateInput": {
            "branch": [
                340
            ],
            "environmentId": [
                340
            ],
            "icon": [
                340
            ],
            "name": [
                340
            ],
            "projectId": [
                340
            ],
            "registryCredentials": [
                305
            ],
            "source": [
                333
            ],
            "templateServiceId": [
                340
            ],
            "variables": [
                89
            ],
            "__typename": [
                340
            ]
        },
        "ServiceDeploymentsConnection": {
            "edges": [
                319
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "ServiceDeploymentsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                47
            ],
            "__typename": [
                340
            ]
        },
        "ServiceDomain": {
            "createdAt": [
                46
            ],
            "deletedAt": [
                46
            ],
            "domain": [
                340
            ],
            "edgeId": [
                340
            ],
            "environmentId": [
                340
            ],
            "id": [
                115
            ],
            "projectId": [
                340
            ],
            "serviceId": [
                340
            ],
            "suffix": [
                340
            ],
            "targetPort": [
                118
            ],
            "updatedAt": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "ServiceDomainCreateInput": {
            "environmentId": [
                340
            ],
            "serviceId": [
                340
            ],
            "targetPort": [
                118
            ],
            "__typename": [
                340
            ]
        },
        "ServiceDomainUpdateInput": {
            "domain": [
                340
            ],
            "environmentId": [
                340
            ],
            "serviceDomainId": [
                340
            ],
            "serviceId": [
                340
            ],
            "targetPort": [
                118
            ],
            "__typename": [
                340
            ]
        },
        "ServiceFeatureFlagToggleInput": {
            "flag": [
                3
            ],
            "serviceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ServiceInstance": {
            "buildCommand": [
                340
            ],
            "builder": [
                20
            ],
            "createdAt": [
                46
            ],
            "cronSchedule": [
                340
            ],
            "deletedAt": [
                46
            ],
            "dockerfilePath": [
                340
            ],
            "domains": [
                6
            ],
            "drainingSeconds": [
                118
            ],
            "environmentId": [
                340
            ],
            "healthcheckPath": [
                340
            ],
            "healthcheckTimeout": [
                118
            ],
            "id": [
                115
            ],
            "isUpdatable": [
                19
            ],
            "latestDeployment": [
                47
            ],
            "nextCronRunAt": [
                46
            ],
            "nixpacksPlan": [
                126
            ],
            "numReplicas": [
                118
            ],
            "overlapSeconds": [
                118
            ],
            "preDeployCommand": [
                126
            ],
            "railpackInfo": [
                293
            ],
            "railwayConfigFile": [
                340
            ],
            "region": [
                340
            ],
            "restartPolicyMaxRetries": [
                118
            ],
            "restartPolicyType": [
                312
            ],
            "rootDirectory": [
                340
            ],
            "serviceId": [
                340
            ],
            "serviceName": [
                340
            ],
            "sleepApplication": [
                19
            ],
            "source": [
                332
            ],
            "startCommand": [
                340
            ],
            "updatedAt": [
                46
            ],
            "upstreamUrl": [
                340
            ],
            "watchPatterns": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ServiceInstanceLimit": {},
        "ServiceInstanceLimitsUpdateInput": {
            "environmentId": [
                340
            ],
            "memoryGB": [
                102
            ],
            "serviceId": [
                340
            ],
            "vCPUs": [
                102
            ],
            "__typename": [
                340
            ]
        },
        "ServiceInstanceUpdateInput": {
            "buildCommand": [
                340
            ],
            "builder": [
                20
            ],
            "cronSchedule": [
                340
            ],
            "dockerfilePath": [
                340
            ],
            "drainingSeconds": [
                118
            ],
            "healthcheckPath": [
                340
            ],
            "healthcheckTimeout": [
                118
            ],
            "multiRegionConfig": [
                126
            ],
            "nixpacksPlan": [
                126
            ],
            "numReplicas": [
                118
            ],
            "overlapSeconds": [
                118
            ],
            "preDeployCommand": [
                340
            ],
            "railwayConfigFile": [
                340
            ],
            "region": [
                340
            ],
            "registryCredentials": [
                305
            ],
            "restartPolicyMaxRetries": [
                118
            ],
            "restartPolicyType": [
                312
            ],
            "rootDirectory": [
                340
            ],
            "sleepApplication": [
                19
            ],
            "source": [
                333
            ],
            "startCommand": [
                340
            ],
            "watchPatterns": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ServiceRepoTriggersConnection": {
            "edges": [
                329
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "ServiceRepoTriggersConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                64
            ],
            "__typename": [
                340
            ]
        },
        "ServiceServiceInstancesConnection": {
            "edges": [
                331
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "ServiceServiceInstancesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                324
            ],
            "__typename": [
                340
            ]
        },
        "ServiceSource": {
            "image": [
                340
            ],
            "repo": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ServiceSourceInput": {
            "image": [
                340
            ],
            "repo": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "ServiceUpdateInput": {
            "icon": [
                340
            ],
            "name": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "Session": {
            "createdAt": [
                46
            ],
            "expiredAt": [
                46
            ],
            "id": [
                115
            ],
            "isCurrent": [
                19
            ],
            "name": [
                340
            ],
            "type": [
                336
            ],
            "updatedAt": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "SessionType": {},
        "SharedVariableConfigureInput": {
            "disabledServiceIds": [
                340
            ],
            "enabledServiceIds": [
                340
            ],
            "environmentId": [
                340
            ],
            "name": [
                340
            ],
            "projectId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "SimilarTemplate": {
            "code": [
                340
            ],
            "createdAt": [
                46
            ],
            "creator": [
                361
            ],
            "deploys": [
                118
            ],
            "description": [
                340
            ],
            "health": [
                102
            ],
            "image": [
                340
            ],
            "name": [
                340
            ],
            "teamId": [
                340
            ],
            "userId": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "SortOrder": {},
        "String": {},
        "Subscription": {
            "buildLogs": [
                129,
                {
                    "deploymentId": [
                        340,
                        "String!"
                    ],
                    "filter": [
                        340
                    ],
                    "limit": [
                        118
                    ]
                }
            ],
            "deployment": [
                47,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "deploymentEvents": [
                50,
                {
                    "id": [
                        340,
                        "String!"
                    ]
                }
            ],
            "deploymentInstanceExecutions": [
                53,
                {
                    "input": [
                        55,
                        "DeploymentInstanceExecutionInput!"
                    ]
                }
            ],
            "deploymentLogs": [
                129,
                {
                    "deploymentId": [
                        340,
                        "String!"
                    ],
                    "filter": [
                        340
                    ],
                    "limit": [
                        118
                    ]
                }
            ],
            "environmentLogs": [
                129,
                {
                    "afterDate": [
                        340
                    ],
                    "afterLimit": [
                        118
                    ],
                    "anchorDate": [
                        340
                    ],
                    "beforeDate": [
                        340
                    ],
                    "beforeLimit": [
                        118
                    ],
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "filter": [
                        340
                    ]
                }
            ],
            "environmentStagedPatch": [
                83,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "httpLogs": [
                114,
                {
                    "afterDate": [
                        340
                    ],
                    "afterLimit": [
                        118
                    ],
                    "anchorDate": [
                        340
                    ],
                    "beforeDate": [
                        340
                    ],
                    "beforeLimit": [
                        118
                    ],
                    "deploymentId": [
                        340,
                        "String!"
                    ],
                    "filter": [
                        340
                    ]
                }
            ],
            "notificationDeliveryUpdated": [
                152
            ],
            "pluginLogs": [
                129,
                {
                    "environmentId": [
                        340,
                        "String!"
                    ],
                    "filter": [
                        340
                    ],
                    "limit": [
                        118
                    ],
                    "pluginId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "replicationProgress": [
                420,
                {
                    "volumeInstanceId": [
                        340,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                340
            ]
        },
        "SubscriptionDiscount": {
            "couponId": [
                340
            ],
            "couponName": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "SubscriptionItem": {
            "itemId": [
                340
            ],
            "priceDollars": [
                102
            ],
            "priceId": [
                340
            ],
            "productId": [
                340
            ],
            "quantity": [
                17
            ],
            "__typename": [
                340
            ]
        },
        "SubscriptionModel": {},
        "SubscriptionPlanLimit": {},
        "SubscriptionPlanType": {},
        "SubscriptionState": {},
        "SupportHealthMetrics": {},
        "SupportTierOverride": {},
        "TCPProxy": {
            "applicationPort": [
                118
            ],
            "createdAt": [
                46
            ],
            "deletedAt": [
                46
            ],
            "domain": [
                340
            ],
            "environmentId": [
                340
            ],
            "id": [
                115
            ],
            "proxyPort": [
                118
            ],
            "serviceId": [
                340
            ],
            "updatedAt": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "TCPProxyCreateInput": {
            "applicationPort": [
                118
            ],
            "environmentId": [
                340
            ],
            "serviceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "Team": {
            "adoptionHistory": [
                4
            ],
            "adoptionLevel": [
                102
            ],
            "apiTokenRateLimit": [
                10
            ],
            "avatar": [
                340
            ],
            "createdAt": [
                46
            ],
            "customer": [
                35
            ],
            "id": [
                115
            ],
            "members": [
                353
            ],
            "name": [
                340
            ],
            "preferredRegion": [
                340
            ],
            "projects": [
                355,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "slackChannelId": [
                340
            ],
            "supportTierOverride": [
                349
            ],
            "teamPermissions": [
                354
            ],
            "updatedAt": [
                46
            ],
            "workspace": [
                430
            ],
            "__typename": [
                340
            ]
        },
        "TeamMember": {
            "avatar": [
                340
            ],
            "email": [
                340
            ],
            "featureFlags": [
                1
            ],
            "id": [
                340
            ],
            "name": [
                340
            ],
            "role": [
                357
            ],
            "__typename": [
                340
            ]
        },
        "TeamPermission": {
            "createdAt": [
                46
            ],
            "id": [
                115
            ],
            "role": [
                357
            ],
            "updatedAt": [
                46
            ],
            "userId": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TeamProjectsConnection": {
            "edges": [
                356
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "TeamProjectsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                197
            ],
            "__typename": [
                340
            ]
        },
        "TeamRole": {},
        "Template": {
            "activeProjects": [
                118
            ],
            "canvasConfig": [
                22
            ],
            "category": [
                340
            ],
            "code": [
                340
            ],
            "communityThreadSlug": [
                340
            ],
            "config": [
                360
            ],
            "createdAt": [
                46
            ],
            "creator": [
                361
            ],
            "demoProjectId": [
                340
            ],
            "description": [
                340
            ],
            "guides": [
                368
            ],
            "health": [
                102
            ],
            "id": [
                115
            ],
            "image": [
                340
            ],
            "isApproved": [
                19
            ],
            "isV2Template": [
                19
            ],
            "isVerified": [
                19
            ],
            "languages": [
                340
            ],
            "metadata": [
                369
            ],
            "name": [
                340
            ],
            "projects": [
                118
            ],
            "readme": [
                340
            ],
            "recentProjects": [
                118
            ],
            "serializedConfig": [
                313
            ],
            "services": [
                375,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "similarTemplates": [
                338
            ],
            "status": [
                377
            ],
            "supportHealthMetrics": [
                348
            ],
            "tags": [
                340
            ],
            "teamId": [
                340
            ],
            "totalPayout": [
                102
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TemplateCloneInput": {
            "code": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TemplateConfig": {},
        "TemplateCreator": {
            "avatar": [
                340
            ],
            "hasPublicProfile": [
                19
            ],
            "name": [
                340
            ],
            "username": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TemplateDeleteInput": {
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TemplateDeployInput": {
            "environmentId": [
                340
            ],
            "projectId": [
                340
            ],
            "services": [
                365
            ],
            "templateCode": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TemplateDeployPayload": {
            "projectId": [
                340
            ],
            "workflowId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TemplateDeployService": {
            "commit": [
                340
            ],
            "hasDomain": [
                19
            ],
            "healthcheckPath": [
                340
            ],
            "id": [
                340
            ],
            "isPrivate": [
                19
            ],
            "name": [
                340
            ],
            "owner": [
                340
            ],
            "preDeployCommand": [
                340
            ],
            "rootDirectory": [
                340
            ],
            "serviceIcon": [
                340
            ],
            "serviceName": [
                340
            ],
            "startCommand": [
                340
            ],
            "tcpProxyApplicationPort": [
                118
            ],
            "template": [
                340
            ],
            "variables": [
                89
            ],
            "volumes": [
                378
            ],
            "__typename": [
                340
            ]
        },
        "TemplateDeployV2Input": {
            "environmentId": [
                340
            ],
            "projectId": [
                340
            ],
            "serializedConfig": [
                313
            ],
            "templateId": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TemplateGenerateInput": {
            "environmentId": [
                340
            ],
            "projectId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TemplateGuide": {
            "post": [
                340
            ],
            "video": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TemplateMetadata": {},
        "TemplateMetrics": {
            "activeDeployments": [
                118
            ],
            "deploymentsLast90Days": [
                118
            ],
            "earningsLast30Days": [
                102
            ],
            "earningsLast90Days": [
                102
            ],
            "eligibleForSupportBonus": [
                19
            ],
            "supportHealth": [
                102
            ],
            "templateHealth": [
                102
            ],
            "totalDeployments": [
                118
            ],
            "totalEarnings": [
                102
            ],
            "__typename": [
                340
            ]
        },
        "TemplatePublishInput": {
            "category": [
                340
            ],
            "demoProjectId": [
                340
            ],
            "description": [
                340
            ],
            "image": [
                340
            ],
            "readme": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TemplateService": {
            "config": [
                373
            ],
            "createdAt": [
                46
            ],
            "id": [
                115
            ],
            "templateId": [
                340
            ],
            "updatedAt": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "TemplateServiceConfig": {},
        "TemplateServiceSourceEjectInput": {
            "projectId": [
                340
            ],
            "repoName": [
                340
            ],
            "repoOwner": [
                340
            ],
            "serviceIds": [
                340
            ],
            "upstreamUrl": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TemplateServicesConnection": {
            "edges": [
                376
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "TemplateServicesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                372
            ],
            "__typename": [
                340
            ]
        },
        "TemplateStatus": {},
        "TemplateVolume": {},
        "TrustedDomain": {
            "domainName": [
                340
            ],
            "id": [
                115
            ],
            "role": [
                340
            ],
            "verificationData": [
                380
            ],
            "verificationType": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TrustedDomainVerificationData": {
            "domainMatch": [
                69
            ],
            "domainStatus": [
                34
            ],
            "__typename": [
                340
            ]
        },
        "TwoFactorInfo": {
            "hasRecoveryCodes": [
                19
            ],
            "isVerified": [
                19
            ],
            "__typename": [
                340
            ]
        },
        "TwoFactorInfoCreateInput": {
            "token": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TwoFactorInfoSecret": {
            "secret": [
                340
            ],
            "uri": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TwoFactorInfoValidateInput": {
            "token": [
                340
            ],
            "twoFactorLinkingKey": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "TwoFactorMethodCompliance": {},
        "TwoFactorMethodProjectWorkspace": {},
        "Upload": {},
        "UsageLimit": {
            "customerId": [
                340
            ],
            "hardLimit": [
                118
            ],
            "id": [
                115
            ],
            "isOverLimit": [
                19
            ],
            "softLimit": [
                118
            ],
            "__typename": [
                340
            ]
        },
        "UsageLimitRemoveInput": {
            "customerId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "UsageLimitSetInput": {
            "customerId": [
                340
            ],
            "hardLimitDollars": [
                118
            ],
            "softLimitDollars": [
                118
            ],
            "__typename": [
                340
            ]
        },
        "User": {
            "agreedFairUse": [
                19
            ],
            "apiTokenRateLimit": [
                10
            ],
            "avatar": [
                340
            ],
            "banReason": [
                340
            ],
            "createdAt": [
                46
            ],
            "email": [
                340
            ],
            "featureFlags": [
                1
            ],
            "flags": [
                392
            ],
            "githubProviderId": [
                340
            ],
            "githubUsername": [
                340
            ],
            "has2FA": [
                19
            ],
            "id": [
                115
            ],
            "isAdmin": [
                19
            ],
            "isConductor": [
                19
            ],
            "isVerified": [
                19
            ],
            "lastLogin": [
                46
            ],
            "name": [
                340
            ],
            "platformFeatureFlags": [
                2
            ],
            "profile": [
                396
            ],
            "projects": [
                401,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "providerAuths": [
                403,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "registrationStatus": [
                304
            ],
            "riskLevel": [
                102
            ],
            "termsAgreedOn": [
                46
            ],
            "username": [
                340
            ],
            "workspace": [
                430
            ],
            "workspaces": [
                430
            ],
            "__typename": [
                340
            ]
        },
        "UserFlag": {},
        "UserFlagsRemoveInput": {
            "flags": [
                392
            ],
            "userId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "UserFlagsSetInput": {
            "flags": [
                392
            ],
            "userId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "UserKickbackEarnings": {
            "total_amount": [
                102
            ],
            "__typename": [
                340
            ]
        },
        "UserProfile": {
            "bio": [
                340
            ],
            "isPublic": [
                19
            ],
            "website": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "UserProfileResponse": {
            "avatar": [
                340
            ],
            "createdAt": [
                46
            ],
            "customerId": [
                340
            ],
            "id": [
                340
            ],
            "isTrialing": [
                19
            ],
            "name": [
                340
            ],
            "profile": [
                396
            ],
            "publicProjects": [
                398,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "publishedTemplates": [
                338
            ],
            "state": [
                340
            ],
            "totalDeploys": [
                118
            ],
            "username": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "UserProfileResponsePublicProjectsConnection": {
            "edges": [
                399
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "UserProfileResponsePublicProjectsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                197
            ],
            "__typename": [
                340
            ]
        },
        "UserProfileUpdateInput": {
            "bio": [
                340
            ],
            "isPublic": [
                19
            ],
            "website": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "UserProjectsConnection": {
            "edges": [
                402
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "UserProjectsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                197
            ],
            "__typename": [
                340
            ]
        },
        "UserProviderAuthsConnection": {
            "edges": [
                404
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "UserProviderAuthsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                241
            ],
            "__typename": [
                340
            ]
        },
        "Variable": {
            "createdAt": [
                46
            ],
            "environment": [
                75
            ],
            "environmentId": [
                340
            ],
            "id": [
                115
            ],
            "isSealed": [
                19
            ],
            "name": [
                340
            ],
            "plugin": [
                181
            ],
            "pluginId": [
                340
            ],
            "references": [
                340
            ],
            "service": [
                314
            ],
            "serviceId": [
                340
            ],
            "updatedAt": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "VariableCollectionUpsertInput": {
            "environmentId": [
                340
            ],
            "projectId": [
                340
            ],
            "replace": [
                19
            ],
            "serviceId": [
                340
            ],
            "skipDeploys": [
                19
            ],
            "variables": [
                89
            ],
            "__typename": [
                340
            ]
        },
        "VariableDeleteInput": {
            "environmentId": [
                340
            ],
            "name": [
                340
            ],
            "projectId": [
                340
            ],
            "serviceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "VariableUpsertInput": {
            "environmentId": [
                340
            ],
            "name": [
                340
            ],
            "projectId": [
                340
            ],
            "serviceId": [
                340
            ],
            "skipDeploys": [
                19
            ],
            "value": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "VercelAccount": {
            "id": [
                340
            ],
            "integrationAuthId": [
                340
            ],
            "isUser": [
                19
            ],
            "name": [
                340
            ],
            "projects": [
                411
            ],
            "slug": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "VercelInfo": {
            "accounts": [
                409
            ],
            "__typename": [
                340
            ]
        },
        "VercelProject": {
            "accountId": [
                340
            ],
            "id": [
                340
            ],
            "name": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "Volume": {
            "createdAt": [
                46
            ],
            "id": [
                115
            ],
            "name": [
                340
            ],
            "project": [
                197
            ],
            "projectId": [
                340
            ],
            "volumeInstances": [
                424,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "__typename": [
                340
            ]
        },
        "VolumeCreateInput": {
            "environmentId": [
                340
            ],
            "mountPath": [
                340
            ],
            "projectId": [
                340
            ],
            "region": [
                340
            ],
            "serviceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "VolumeInstance": {
            "createdAt": [
                46
            ],
            "currentSizeMB": [
                102
            ],
            "environment": [
                75
            ],
            "environmentId": [
                340
            ],
            "externalId": [
                340
            ],
            "id": [
                115
            ],
            "mountPath": [
                340
            ],
            "region": [
                340
            ],
            "service": [
                314
            ],
            "serviceId": [
                340
            ],
            "sizeMB": [
                118
            ],
            "state": [
                422
            ],
            "volume": [
                412
            ],
            "volumeId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "VolumeInstanceBackup": {
            "createdAt": [
                46
            ],
            "creatorId": [
                340
            ],
            "expiresAt": [
                46
            ],
            "externalId": [
                340
            ],
            "id": [
                340
            ],
            "name": [
                340
            ],
            "referencedMB": [
                118
            ],
            "scheduleId": [
                340
            ],
            "usedMB": [
                118
            ],
            "volumeInstanceSizeMB": [
                118
            ],
            "__typename": [
                340
            ]
        },
        "VolumeInstanceBackupSchedule": {
            "createdAt": [
                46
            ],
            "cron": [
                340
            ],
            "id": [
                115
            ],
            "kind": [
                417
            ],
            "name": [
                340
            ],
            "retentionSeconds": [
                118
            ],
            "__typename": [
                340
            ]
        },
        "VolumeInstanceBackupScheduleKind": {},
        "VolumeInstanceReplicationProgress": {
            "bytesTransferred": [
                17
            ],
            "percentComplete": [
                102
            ],
            "timestamp": [
                46
            ],
            "transferRateMbps": [
                102
            ],
            "__typename": [
                340
            ]
        },
        "VolumeInstanceUpdateInput": {
            "mountPath": [
                340
            ],
            "serviceId": [
                340
            ],
            "state": [
                422
            ],
            "__typename": [
                340
            ]
        },
        "VolumeReplicationProgressUpdate": {
            "currentSnapshot": [
                421
            ],
            "destExternalId": [
                340
            ],
            "destRegion": [
                340
            ],
            "destStackerId": [
                340
            ],
            "error": [
                340
            ],
            "estimatedTimeRemainingMs": [
                17
            ],
            "history": [
                418
            ],
            "nbSnapshots": [
                118
            ],
            "offlineBytesTransferred": [
                17
            ],
            "offlineTotalBytes": [
                17
            ],
            "onlineBytesTransferred": [
                17
            ],
            "onlineTotalBytes": [
                17
            ],
            "percentComplete": [
                102
            ],
            "snapshotsSizes": [
                17
            ],
            "srcExternalId": [
                340
            ],
            "srcRegion": [
                340
            ],
            "srcStackerId": [
                340
            ],
            "status": [
                307
            ],
            "transferRateMbps": [
                102
            ],
            "__typename": [
                340
            ]
        },
        "VolumeSnapshotReplicationProgressUpdate": {
            "bytesTransferred": [
                17
            ],
            "compressedBytesTransferred": [
                17
            ],
            "compressedTransferRateMbps": [
                102
            ],
            "elapsedMs": [
                118
            ],
            "error": [
                340
            ],
            "estimatedTimeRemainingMs": [
                17
            ],
            "index": [
                118
            ],
            "percentComplete": [
                102
            ],
            "startedAt": [
                46
            ],
            "status": [
                306
            ],
            "totalBytes": [
                17
            ],
            "transferRateMbps": [
                102
            ],
            "__typename": [
                340
            ]
        },
        "VolumeState": {},
        "VolumeUpdateInput": {
            "name": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "VolumeVolumeInstancesConnection": {
            "edges": [
                425
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "VolumeVolumeInstancesConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                414
            ],
            "__typename": [
                340
            ]
        },
        "WithdrawalPlatformTypes": {},
        "WorkflowId": {
            "workflowId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "WorkflowResult": {
            "error": [
                340
            ],
            "status": [
                429
            ],
            "__typename": [
                340
            ]
        },
        "WorkflowStatus": {},
        "Workspace": {
            "adoptionHistory": [
                4
            ],
            "adoptionLevel": [
                102
            ],
            "allowDeprecatedRegions": [
                19
            ],
            "apiTokenRateLimit": [
                10
            ],
            "avatar": [
                340
            ],
            "banReason": [
                340
            ],
            "createdAt": [
                46
            ],
            "customer": [
                35
            ],
            "discordRole": [
                340
            ],
            "hasSAML": [
                19
            ],
            "id": [
                115
            ],
            "identityProviders": [
                434,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "members": [
                437
            ],
            "name": [
                340
            ],
            "partnerProfile": [
                170
            ],
            "plan": [
                175
            ],
            "preferredRegion": [
                340
            ],
            "projects": [
                439,
                {
                    "after": [
                        340
                    ],
                    "before": [
                        340
                    ],
                    "first": [
                        118
                    ],
                    "last": [
                        118
                    ]
                }
            ],
            "referredUsers": [
                300
            ],
            "slackChannelId": [
                340
            ],
            "subscriptionModel": [
                344
            ],
            "supportTierOverride": [
                349
            ],
            "team": [
                352
            ],
            "updatedAt": [
                46
            ],
            "usersWithout2FA": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "WorkspaceIdPConnection": {
            "createdAt": [
                46
            ],
            "provider": [
                340
            ],
            "status": [
                432
            ],
            "updatedAt": [
                46
            ],
            "__typename": [
                340
            ]
        },
        "WorkspaceIdPConnectionStatus": {},
        "WorkspaceIdentityProvider": {
            "connection": [
                431
            ],
            "createdAt": [
                46
            ],
            "enforcementEnabledAt": [
                46
            ],
            "id": [
                115
            ],
            "updatedAt": [
                46
            ],
            "workspace": [
                430
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "WorkspaceIdentityProvidersConnection": {
            "edges": [
                435
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "WorkspaceIdentityProvidersConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                433
            ],
            "__typename": [
                340
            ]
        },
        "WorkspaceInviteCodeCreateInput": {
            "role": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "WorkspaceMember": {
            "avatar": [
                340
            ],
            "email": [
                340
            ],
            "featureFlags": [
                1
            ],
            "id": [
                340
            ],
            "name": [
                340
            ],
            "role": [
                357
            ],
            "twoFactorAuthEnabled": [
                19
            ],
            "__typename": [
                340
            ]
        },
        "WorkspacePermissionChangeInput": {
            "role": [
                357
            ],
            "userId": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "WorkspaceProjectsConnection": {
            "edges": [
                440
            ],
            "pageInfo": [
                169
            ],
            "__typename": [
                340
            ]
        },
        "WorkspaceProjectsConnectionEdge": {
            "cursor": [
                340
            ],
            "node": [
                197
            ],
            "__typename": [
                340
            ]
        },
        "WorkspaceTrustedDomainCreateInput": {
            "domainName": [
                340
            ],
            "role": [
                340
            ],
            "workspaceId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "WorkspaceUpdateInput": {
            "avatar": [
                340
            ],
            "name": [
                340
            ],
            "preferredRegion": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "WorkspaceUserInviteInput": {
            "code": [
                340
            ],
            "email": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "WorkspaceUserRemoveInput": {
            "userId": [
                340
            ],
            "__typename": [
                340
            ]
        },
        "customerTogglePayoutsToCreditsInput": {
            "isWithdrawingToCredits": [
                19
            ],
            "__typename": [
                340
            ]
        }
    }
}