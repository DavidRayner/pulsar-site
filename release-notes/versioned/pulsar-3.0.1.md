---
id: pulsar-3.0.1
title: Apache Pulsar 3.0.1
sidebar_label: Apache Pulsar 3.0.1
---

#### 2023-08-07

### Important notice
- Fix the reason label of authentication metrics in [#20030](https://github.com/apache/pulsar/pull/20030)

### Broker
- [Broker] Add annotation for topic compaction strategy by @Demogorgon314 in [#20858](https://github.com/apache/pulsar/pull/20858)
- [Broker] Add broker filter sync method back to guarantee the API compatibility by @Demogorgon314 in [#20826](https://github.com/apache/pulsar/pull/20826)
- [Broker] Avoid infinite bundle unloading by @Demogorgon314 in [#20822](https://github.com/apache/pulsar/pull/20822)
- [Broker] Call ServerCnx#closeProducer from correct thread by @michaeljmarshall in [#20747](https://github.com/apache/pulsar/pull/20747)
- [Broker] Added the skipped message handler for ServiceUnitStateChannel by @heesung-sn in [#20677](https://github.com/apache/pulsar/pull/20677)
- [Broker] Make ExtensibleLoadManagerImpl's broker filter pure async by @Demogorgon314 in [#20666](https://github.com/apache/pulsar/pull/20666)
- [Broker] Fix the publish latency spike from the contention of MessageDeduplication by @codelipenghui in [#20647](https://github.com/apache/pulsar/pull/20647)
- [Broker] Fix get owned service units NPE by @Demogorgon314 in [#20625](https://github.com/apache/pulsar/pull/20625)
- [Broker] Topic policy can not work well if replay policy message has any exception. by @zhanghaou in [#20613](https://github.com/apache/pulsar/pull/20613)
- [Broker] Fix the publish latency spike issue with a large number of producers by @codelipenghui in [#20607](https://github.com/apache/pulsar/pull/20607)
- [Broker] New load balancer system topic should not be auto-created now by @heesung-sn in [#20566](https://github.com/apache/pulsar/pull/20566)
- [Broker] Handle get owned namespaces admin API in ExtensibleLoadManager by @Demogorgon314 in [#20552](https://github.com/apache/pulsar/pull/20552)
- [Broker] Handle heartbeat namespace in ExtensibleLoadManager by @Demogorgon314 in [#20551](https://github.com/apache/pulsar/pull/20551)
- [Broker] Validate authz earlier in delete subscription logic by @michaeljmarshall in [#20549](https://github.com/apache/pulsar/pull/20549)
- [Broker] REST Client Producer fails with TLS only by @maanders-tibco in [#20535](https://github.com/apache/pulsar/pull/20535)
- [Broker] Fix redirect loop when using ExtensibleLoadManager and list in bundle admin API by @Demogorgon314 in [#20528](https://github.com/apache/pulsar/pull/20528)
- [Broker] Restore solution for certain topic unloading race conditions by @lhotari in [#20527](https://github.com/apache/pulsar/pull/20527)
- [Broker] Emit the namespace bundle listener event on extensible load manager by @Demogorgon314 in [#20525](https://github.com/apache/pulsar/pull/20525)
- [Broker] Disable EntryFilters for system topics by @lhotari in [#20514](https://github.com/apache/pulsar/pull/20514)
- [Broker] Replace test call to Auth0 with call to WireMock by @michaeljmarshall in [#20465](https://github.com/apache/pulsar/pull/20465)
- [Broker] Fix return the earliest position when query position by timestamp. by @hanmz in [#20457](https://github.com/apache/pulsar/pull/20457)
- [Broker] Avoid `PersistentSubscription.expireMessages` logic check backlog twice. by @lifepuzzlefun in [#20416](https://github.com/apache/pulsar/pull/20416)
- [Broker] PIP-255 Part-1: Add listener interface for namespace service by @hleecs in [#20406](https://github.com/apache/pulsar/pull/20406)
- [Broker] Partitioned __change_events topic is policy topic by @michaeljmarshall in [#20392](https://github.com/apache/pulsar/pull/20392)
- [Broker] Do not expose bucketDelayedIndexStats by @coderzc in [#20383](https://github.com/apache/pulsar/pull/20383)
- [Broker] Pre-create non-partitioned system topics for load balance extension by @heesung-sn in [#20370](https://github.com/apache/pulsar/pull/20370)
- [Broker] ManagedLedger.getConfig().getProperties().putAll(properties) NPE by @heesung-sn in [#20361](https://github.com/apache/pulsar/pull/20361)
- [Broker] Fix broker load manager class filter NPE by @Demogorgon314 in [#20350](https://github.com/apache/pulsar/pull/20350)
- [Broker] In Key_Shared mode: remove unnecessary mechanisms of message skip to avoid unnecessary consumption stuck by @poorbarcode in [#20335](https://github.com/apache/pulsar/pull/20335)
- [Broker] When creating a namespace anti-affinity group with the default local policies, use the bundle size supplied by the user. by @syk-coder in [#20327](https://github.com/apache/pulsar/pull/20327)
- [Broker] Fix skip message API when hole messages exist by @crossoverJie in [#20326](https://github.com/apache/pulsar/pull/20326)
- [Broker] Gracefully shut download balancer extension by @heesung-sn in [#20315](https://github.com/apache/pulsar/pull/20315)
- [Broker] Fix class name typo `PrecisPublishLimiter` to "Precise" by @JooHyukKim in [#20310](https://github.com/apache/pulsar/pull/20310)
- [Broker] Allow Access to System Topic Metadata for Reader Creation Post-Namespace Deletion by @liangyepianzhou in [#20304](https://github.com/apache/pulsar/pull/20304)
- [Broker] Fix NPE caused by topic publish rate limiter. by @dragonls in [#20302](https://github.com/apache/pulsar/pull/20302)
- [Broker] Fix `UnsupportedOperationException` when updating topic properties. by @liangyepianzhou in [#20261](https://github.com/apache/pulsar/pull/20261)
- [Broker] Fix ledger cachemiss size metric by @AnonHxy in [#20257](https://github.com/apache/pulsar/pull/20257)
- [Broker] Fix default bundle size used while setting bookie affinity by @syk-coder in [#20250](https://github.com/apache/pulsar/pull/20250)
- [Broker] Fix the behavior of delayed message in Key_Shared mode by @codelipenghui in [#20233](https://github.com/apache/pulsar/pull/20233)
- [Broker] Fix Return value of getPartitionedStats doesn't contain subscription type by @1Jack2 in [#20210](https://github.com/apache/pulsar/pull/20210)
- [Broker] Skip split bundle if only one broker by @poorbarcode in [#20190](https://github.com/apache/pulsar/pull/20190)
- [Broker] Fix `RoaringBitmap.contains` can't check value 65535 by @coderzc in [#20176](https://github.com/apache/pulsar/pull/20176)
- [Broker] Release EntryBuffer after parsing proto object by @coderzc in [#20170](https://github.com/apache/pulsar/pull/20170)
- [Broker] Remove useless field in the DelayedMessageIndexBucketSegment.proto by @coderzc in [#20166](https://github.com/apache/pulsar/pull/20166)
- [Broker] Optimization protobuf code in the bucket delayed tracker by @coderzc in [#20158](https://github.com/apache/pulsar/pull/20158)
- [Broker] Move bitmap from lastMutableBucket to ImmutableBucket by @coderzc in [#20156](https://github.com/apache/pulsar/pull/20156)
- [Broker] Fix tenant admin authorization bug. (#20068)" by @michaeljmarshall in [#20143](https://github.com/apache/pulsar/pull/20143)
- [Broker] Producer/Consumer should call allowTopicOperationAsync by @michaeljmarshall in [#20142](https://github.com/apache/pulsar/pull/20142)
- [Broker] Fix entry filter feature for the non-persistent topic by @gaoran10 in [#20141](https://github.com/apache/pulsar/pull/20141)
- [Broker] Optimize delayed metadata index bitmap by @mattisonchao in [#20136](https://github.com/apache/pulsar/pull/20136)
- [Broker] Fast fix infinite HTTP call getSubscriptions caused by wrong topicName by @poorbarcode in [#20131](https://github.com/apache/pulsar/pull/20131)
- [Broker] Make timer execute immediately after load index by @coderzc in [#20126](https://github.com/apache/pulsar/pull/20126)
- [Broker] Cache LedgerHandle in BookkeeperBucketSnapshotStorage by @coderzc in [#20117](https://github.com/apache/pulsar/pull/20117)
- [Broker] Close temporary open ledger in BookkeeperBucketSnapshotStorage by @lifepuzzlefun in [#20111](https://github.com/apache/pulsar/pull/20111)
- [Broker] Fix use error TimeUnit to record publish latency by @TakaHiR07 in [#20074](https://github.com/apache/pulsar/pull/20074)
- [Broker] Fix tenant admin authorization bug. by @dragonls in [#20068](https://github.com/apache/pulsar/pull/20068)
- [Broker] Fix getPartitionedStats miss subscription's messageAckRate by @wangjialing218 in [#19870](https://github.com/apache/pulsar/pull/19870)
- [Broker] Do not filter system topic while shedding. by @thetumbled in [#18949](https://github.com/apache/pulsar/pull/18949)
- [Broker] There are two same-named managed ledgers in the one broker by @poorbarcode in [#18688](https://github.com/apache/pulsar/pull/18688)
- [Broker] If ledger lost, cursor mark delete position can not forward by @poorbarcode in [#18620](https://github.com/apache/pulsar/pull/18620)
- [Broker] Support cgroup v2 by using `jdk.internal.platform.Metrics` in Pulsar Loadbalancer by @coderzc in [#16832](https://github.com/apache/pulsar/pull/16832)

## Clients
- [Client] Fix the deadlock issue of consumers while using multiple IO threads by @codelipenghui in [#20669](https://github.com/apache/pulsar/pull/20669)
- [Client] Make the whole grabCnx() progress atomic by @BewareMyPower in [#20595](https://github.com/apache/pulsar/pull/20595)
- [Client] Thread-safe seek by @tisonkun in [#20321](https://github.com/apache/pulsar/pull/20321)
- [Client] Fix  where the function getMsgNumInReceiverQueue always returns 0 when using message listener by @crossoverJie in [#20245](https://github.com/apache/pulsar/pull/20245)
- [Client] Java Client's Seek Logic Not Threadsafe #1 by @JooHyukKim in [#20242](https://github.com/apache/pulsar/pull/20242)

### Pulsar IO and Pulsar Functions
- [Functions] Exit JVM when the main thread throws an exception by @michaeljmarshall in [#20689](https://github.com/apache/pulsar/pull/20689)
- [Functions] TLS args admin download command use zero arity by @michaeljmarshall in [#20513](https://github.com/apache/pulsar/pull/20513)
- [Functions] Support customizing TLS config for function download command by @michaeljmarshall in [#20482](https://github.com/apache/pulsar/pull/20482)
- [Functions] Reset idle timer correctly by @flowchartsman in [#20450](https://github.com/apache/pulsar/pull/20450)
- [Functions] Go functions must retrieve consumers by non-partitioned topic ID by @flowchartsman in [#20413](https://github.com/apache/pulsar/pull/20413)
- [Functions] Go functions need to use static grpcPort in k8s runtime by @flowchartsman in [#20404](https://github.com/apache/pulsar/pull/20404)
- [Functions] Correct TLS cert config translation from broker to fn worker by @michaeljmarshall in [#20297](https://github.com/apache/pulsar/pull/20297)
- [Functions] Use functions classloader in TopicSchema.newSchemaInstance() to fix ClassNotFoundException when using custom SerDe classes. (targeted for master) by @gmiklos-ltg in [#20115](https://github.com/apache/pulsar/pull/20115)
- [Functions] Check user metric len before iterating by @flowchartsman in [#20021](https://github.com/apache/pulsar/pull/20021)
- [Functions] Support multiple input topics for Go runtime by @jiangpengcheng in [#20000](https://github.com/apache/pulsar/pull/20000)
- [Functions] Make pulsar-admin support update py/go with package url by @jiangpengcheng in [#19897](https://github.com/apache/pulsar/pull/19897)
- [Functions] Fix JavaInstanceStarter inferring type class name error by @jiangpengcheng in [#19896](https://github.com/apache/pulsar/pull/19896)
- [Functions] Fix function update error by @jiangpengcheng in [#19895](https://github.com/apache/pulsar/pull/19895)
- [Functions] Make KubernetesRuntime translate characters in function tenant, namespace, and name during function removal to avoid label errors by @csthomas1 in [#19584](https://github.com/apache/pulsar/pull/19584)
- [Connectors] Close the Kafka source connector that got stuck by @poorbarcode in [#20698](https://github.com/apache/pulsar/pull/20698)
- [Connectors] Close the Kafka source connector if there is an uncaught exception by @RobertIndie in [#20424](https://github.com/apache/pulsar/pull/20424)
- [Connectors] Add protobuf ByteString to pulsar-io jdbc core by @bpereto in [#20259](https://github.com/apache/pulsar/pull/20259)
- [Connectors] KCA: handle kafka sources that use commitRecord by @dlg99 in [#20121](https://github.com/apache/pulsar/pull/20121)

### Observability
- [Metrics] Add JVM start time metric by @Technoboy- in [#20381](https://github.com/apache/pulsar/pull/20381)
- [Metrics] Fix the reason label of authentication metrics by @gaoran10 in [#20030](https://github.com/apache/pulsar/pull/20030)

### CLI
- [Pulsar Admin] Set ns level backlog quota does not take effect if retention exists by @poorbarcode in [#20690](https://github.com/apache/pulsar/pull/20690)
- [Pulsar Admin] Make get list from bundle Admin API async by @Demogorgon314 in [#20652](https://github.com/apache/pulsar/pull/20652)
- [Pulsar Admin] Return BAD_REQUEST on cluster data is null for createCluster by @tisonkun in [#20346](https://github.com/apache/pulsar/pull/20346)
- [Pulsar Admin] Fix examine messages if total message is zero by @AnonHxy in [#20152](https://github.com/apache/pulsar/pull/20152)
- [Pulsar Admin] Fast fix infinite HTTP call getSubscriptions caused by wrong topicName by @poorbarcode in [#20131](https://github.com/apache/pulsar/pull/20131)
- [Pulsar Admin] Report earliest msg in partitioned backlog by @teabot in [#19465](https://github.com/apache/pulsar/pull/19465)
- [Pulsar CLI] The variable producerName of BatchMsgContainer is null by @poorbarcode in [#20819](https://github.com/apache/pulsar/pull/20819)
- [Pulsar CLI] Allow pulser-client consume to create a replicated subscription by @JooHyukKim in [#20316](https://github.com/apache/pulsar/pull/20316)
- [Pulsar CLI] Fix logging noise while admin tool exit by @rdhabalia in [#19884](https://github.com/apache/pulsar/pull/19884)
- [Client Tool] PerformanceProducer does not produce the expected number of messages. by @thetumbled in [#19775](https://github.com/apache/pulsar/pull/19775)

### Others
- [Schema] Add admin CLI for testCompatibility by @congbobo184 in [#19974](https://github.com/apache/pulsar/pull/19974)

### Library updates
- Upgrade PyYaml version to 6.0.1 by @yaalsn in [#20831](https://github.com/apache/pulsar/pull/20831)
- Upgrade bookkeeper to 4.16.2 by @zymap in [#20704](https://github.com/apache/pulsar/pull/20704)
- Upgrade snappy-java to address multiple CVEs by @lhotari in [#20604](https://github.com/apache/pulsar/pull/20604)
- Upgrade Jetty to address CVEs by @lhotari in [#20461](https://github.com/apache/pulsar/pull/20461)
- Upgrade maven surefire plugin and other build/test plugins/libs including TestNG version by @lhotari in [#20270](https://github.com/apache/pulsar/pull/20270)
- Upgrade Netty to 4.1.93.Final by @lhotari in [#20423](https://github.com/apache/pulsar/pull/20423)
- Upgrade sqlite-jdbc to resolve CVE-2023-32697 by @lhotari in [#20411](https://github.com/apache/pulsar/pull/20411)
- Upgrade Guava to 32.0.0 to address CVE-2023-2976 by @lhotari in [#20459](https://github.com/apache/pulsar/pull/20459)

For the complete list, check the [Pulsar 3.0.1 changelog](https://github.com/apache/pulsar/pulls?q=is%3Apr+label%3Arelease%2F3.0.1+).
