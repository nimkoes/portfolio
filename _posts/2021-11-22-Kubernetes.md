---
layout: page
title:  "Kubernetes"
subtitle: "with nimkoes"
date:   2021-11-22 01:21:17 +0530
categories: ["study"]
author: "nimkoes"
---

## **개요**
---
inflearn 강의를 보고 정리한 자료  
[<u>'대세는 쿠버네티스' 강의 대시보드</u>][link_study]
　  
　  
　  

## **정리**
---

- **intro**
  - Introduction [<sub>introduction</sub>](https://nimkoes.notion.site/Introduction-dec90eab62db4856a7d966b7cdf37116?pvs=4){:target="_blank"}

- **(기초) 기초 다지기**
  - Why Kubernetes?                      [<sub>쿠버네티스 사용 이유</sub>](https://nimkoes.notion.site/Why-Kubernetes-414babdb86584014b2dbb42347a40114?pvs=4){:target="_blank"}  
  - VM vs Container                      [<sub>VM 과 Container 비교</sub>](https://nimkoes.notion.site/VM-vs-Container-d1d4497cd8a6456e8b9654db2c554424?pvs=4){:target="_blank"}  
  - Getting started - Kubernetes         [<sub>Kubernetes 시작하기</sub>](https://nimkoes.notion.site/Getting-started-Kubernetes-62a191ae8aaf4da1b6bb1a6970457598?pvs=4){:target="_blank"}  
  - Kubernetes Overview                  [<sub>쿠버네티스 훑어보기</sub> ](https://nimkoes.notion.site/Kubernetes-Overview-2dbb5978277645f39e1f4ccd753de2a7?pvs=4){:target="_blank"}  
- **(기초) 기본 오브젝트**
  - Pod - Container, Label, NodeSchedule        [<sub>Pod (Container, Label, NodeSchedule)</sub>](https://nimkoes.notion.site/Pod-Container-Label-NodeSchedule-5879a8d11d4845b2b7705fb225d1abd4?pvs=4){:target="_blank"}  
  - Service - ClusterIP, NodePort, LoadBalancer [<sub>Service (ClusterIP, NodePort, LoadBalancer)</sub>](https://nimkoes.notion.site/Service-ClusterIP-NodePort-LoadBalancer-d931987cd8c5429dba9aca3a374af2d4?pvs=4){:target="_blank"}  
  - Volume - emptyDir, hostPath, PV/PVC         [<sub>Volume (emptyDir, hostPath, PVC/PV)</sub>](https://nimkoes.notion.site/Volume-emptyDir-hostPath-PVC-PV-0580925693e848a2998de91af924931f?pvs=4){:target="_blank"}  
  - ConfigMap, Secret - Env, Mount              [<sub>ConfigMap, Secret (Env, Mount)</sub>](https://nimkoes.notion.site/ConfigMap-Secret-Env-Mount-3691e51b1d744afea22c3b445690f497?pvs=4){:target="_blank"}  
  - Namespace, ResourceQuota, LimitRange        [<sub>Namespace, ResourceQuota, LimitRange</sub>](https://nimkoes.notion.site/Namespace-ResourceQuota-LimitRange-701951b324af433abd815525d910f80d?pvs=4){:target="_blank"}  
- **(기초) 컨트롤러**
  - Replication Controller, ReplicaSet - Template, Replicas, Selector [<sub>Replication Controller, ReplicaSet (Template, Replicas, Selector)</sub>](https://nimkoes.notion.site/Replication-Controller-ReplicaSet-Template-Replicas-Selector-6385b0123c5e48aba182b6baf80f54c5?pvs=4){:target="_blank"}  
  - Deployment - Recreate, RollingUpdate                              [<sub>Deployment (Recreate, RollingUpdate)</sub>](https://nimkoes.notion.site/Deployment-Recreate-RollingUpdate-565a951f8a4e4d9fa32a996d9cd68c3e?pvs=4){:target="_blank"}  
  - DaemonSet, Job, CronJob                                           [<sub>DaemonSet, Job, CronJob</sub>](https://nimkoes.notion.site/DaemonSet-Job-CronJob-35f2eca91a6945e8bd6892cd3b867ffc?pvs=4){:target="_blank"}
- **(중급) Pod**
  - Pod - Lifecycle                     [<sub>Pod (Lifecycle)</sub>](https://nimkoes.notion.site/Pod-Lifecycle-2a9f5f1fda0e45078e2caea02694ca95?pvs=4){:target="_blank"}  
  - Pod - ReadinessProbe, LivenessProbe [<sub>Pod (ReadinessProbe, LivenessProbe)</sub>](https://nimkoes.notion.site/Pod-ReadinessProbe-LivenessProbe-92a77b821b914b3cbc0308a736ce22ce?pvs=4){:target="_blank"}  
  - Pod - QoS Classes                   [<sub>Pod (QoS Classes)</sub>](https://nimkoes.notion.site/Pod-QoS-Classes-6fda2dcf94c44e3482bd1069b4d8b2f7?pvs=4){:target="_blank"}  
  - Pod - Node Scheduling               [<sub>Pod (Node Scheduling)</sub>](https://nimkoes.notion.site/Pod-Node-Scheduling-b46bf471fcd345438f8355fab68ce790?pvs=4){:target="_blank"}  
- **(중급) 기본 오브젝트**
  - Service - Headless, Endpoint, ExternalName                         [<sub>Service (Headless, Endpoint, ExternalName)</sub>](https://nimkoes.notion.site/Service-Headless-Endpoint-ExternalName-8398b481d89e473dbcfd0d3787554e5a?pvs=4){:target="_blank"}  
  - Volume - Dynamic Provisioning, StorageClass, Status, ReclaimPolicy [<sub>Volume (Dynamic Provisioning, StorageClass, Status, ReclaimPolicy)</sub>](https://nimkoes.notion.site/Volume-Dynamic-Provisioning-StorageClass-Status-ReclaimPolicy-e6fa119e7f8247bf80a053f7f88283c2?pvs=4){:target="_blank"}  
  - Accessing API - Overview                                           [<sub>Accessing API (Overview)</sub>](https://nimkoes.notion.site/Accessing-API-Overview-7e09a987a31444b8a21aa8ddc36587c2?pvs=4){:target="_blank"}  
  - Authentication - X509 Certs, kubectl, ServiceAccount               [<sub>Authentication (X509 Certs, kubectl, ServiceAccount)</sub>](https://nimkoes.notion.site/Authentication-X509-Certs-kubectl-ServiceAccount-51bf3c60c40a481f964d18328cd80b3c?pvs=4){:target="_blank"}  
  - Authorization - RBAC, Role, RoleBinding                            [<sub>Authorization (RBAC, Role, RoleBinding)</sub>](https://nimkoes.notion.site/Authorization-RBAC-Role-RoleBinding-b8dadb01ccfc4ab59729e26f9157b459?pvs=4){:target="_blank"}  
  - Kubernetes Dashboard                                               [<sub>Kubernetes Dashboard</sub>](https://nimkoes.notion.site/Kubernetes-Dashboard-6d1faf9c84974d7eb96b88f797d348a4?pvs=4){:target="_blank"}
- **(중급) 컨트롤러**
  - StatefulSet      [<sub>StatefulSet</sub>](https://nimkoes.notion.site/StatefulSet-6482638fc9b341c689b4260227662da4?pvs=4){:target="_blank"}  
  - Ingress - Nginx  [<sub>Ingress (Nginx)</sub>](https://nimkoes.notion.site/Ingress-Nginx-7adb3c0b86be48aaacb0f32c4f41ea91?pvs=4){:target="_blank"}  
  - Autoscaler - HPA [<sub>Autoscaler (HPA)</sub>](https://nimkoes.notion.site/Autoscaler-HPA-ebfa20ba9ac848379fb9b37b9ec2ba6e?pvs=4){:target="_blank"}  
- **(중급) 아키택처**
  - Kubernetes Architecture 개요[<sub>Kubernetes Architecture 개요</sub>](https://nimkoes.notion.site/Kubernetes-Architecture-f060d9063c81474ea21e58e0739251bd?pvs=4){:target="_blank"}  
  - Component - kube-apiserver, etcd, kube-schedule, kube-proxy, kube-controller-manager [<sub>Component (kube-apiserver, etcd, kube-schedule, kube-proxy, kube-controller-manager)</sub>](https://nimkoes.notion.site/Component-kube-apiserver-etcd-kube-schedule-kube-proxy-kube-controller-manager-a86880e388cf482a9b850fa29b14947c?pvs=4){:target="_blank"}  
  - Networking - Pod / Service Network (Calico), Pause Container                         [<sub>Networking (Pod / Service Network (Calico), Pause Container)</sub>](https://nimkoes.notion.site/Networking-Pod-Service-Network-Calico-Pause-Container-57063064005242e994be5bc79d18c3a0?pvs=4){:target="_blank"}  
  - Storage - NFS(FileStorage), Longhorn(BlockStorage)                                   [<sub>Storage (NFS(FileStorage), Longhorn(BlockStorage))</sub>](https://nimkoes.notion.site/Storage-NFS-FileStorage-Longhorn-BlockStorage-c8300b7cea8248498acc68b814caba42?pvs=4){:target="_blank"}  
  - Logging - PLG Stack                                                                  [<sub>Logging (PLG Stack)</sub>](https://nimkoes.notion.site/Logging-PLG-Stack-aed904a831d34be2ae42f4dc1e1b9109?pvs=4){:target="_blank"}  
　  
　  
　  

[link_study]:https://www.inflearn.com/course/%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4-%EA%B8%B0%EC%B4%88
