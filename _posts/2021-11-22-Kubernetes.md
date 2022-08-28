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
  - Introduction [<sub>introduction</sub>](https://inky-bug-9a2.notion.site/Introduction-e291b18ece2546bd93326ebc76ee1ac1){:target="_blank"}

- **(기초) 기초 다지기**
  - Why Kubernetes?                      [<sub>쿠버네티스 사용 이유</sub>](https://inky-bug-9a2.notion.site/Why-Kubernetes-4bdeef9821e54b18b59beb8f69cae525){:target="_blank"}  
  - VM vs Container                      [<sub>VM 과 Container 비교</sub>](https://inky-bug-9a2.notion.site/VM-vs-Container-cf0a270b8e1d499687b463f598cf057f){:target="_blank"}  
  - Getting started - Kubernetes         [<sub>Kubernetes 시작하기</sub>](https://inky-bug-9a2.notion.site/Getting-started-Kubernetes-43a28a5ac53c4f3daf34febd43960e3e){:target="_blank"}  
  - Kubernetes Overview                  [<sub>쿠버네티스 훑어보기</sub> ](https://inky-bug-9a2.notion.site/Kubernetes-Overview-72f57cd08ba248ecafb152abd25674ac){:target="_blank"}  
- **(기초) 기본 오브젝트**
  - Pod - Container, Label, NodeSchedule        [<sub>Pod (Container, Label, NodeSchedule)</sub>](https://inky-bug-9a2.notion.site/Pod-Container-Label-NodeSchedule-4a1ed94cc7234de998c8f59b80b0d7c0){:target="_blank"}  
  - Service - ClusterIP, NodePort, LoadBalancer [<sub>Service (ClusterIP, NodePort, LoadBalancer)</sub>](https://inky-bug-9a2.notion.site/Service-ClusterIP-NodePort-LoadBalancer-68f2357916804e2cbc5157845f3eb84f){:target="_blank"}  
  - Volume - emptyDir, hostPath, PV/PVC         [<sub>Volume (emptyDir, hostPath, PVC/PV)</sub>](https://inky-bug-9a2.notion.site/Volume-emptyDir-hostPath-PVC-PV-8a51676bf0454647b827e16bb0caa688){:target="_blank"}  
  - ConfigMap, Secret - Env, Mount              [<sub>ConfigMap, Secret (Env, Mount)</sub>](https://inky-bug-9a2.notion.site/ConfigMap-Secret-Env-Mount-5b1750a16de44653a33e200c0b6a2d11){:target="_blank"}  
  - Namespace, ResourceQuota, LimitRange        [<sub>Namespace, ResourceQuota, LimitRange</sub>](https://inky-bug-9a2.notion.site/Namespace-ResourceQuota-LimitRange-d64e89da928140a48c39e7452c8263c6){:target="_blank"}  
- **(기초) 컨트롤러**
  - Replication Controller, ReplicaSet - Template, Replicas, Selector [<sub>Replication Controller, ReplicaSet (Template, Replicas, Selector)</sub>](https://inky-bug-9a2.notion.site/Replication-Controller-ReplicaSet-Template-Replicas-Selector-e5c7cc7cb2d4484084f127983dfe278f){:target="_blank"}  
  - Deployment - Recreate, RollingUpdate                              [<sub>Deployment (Recreate, RollingUpdate)</sub>](https://inky-bug-9a2.notion.site/Deployment-Recreate-RollingUpdate-cf999c3724c24b9da4947b98c5012681){:target="_blank"}  
  - DaemonSet, Job, CronJob                                           [<sub>DaemonSet, Job, CronJob</sub>](https://inky-bug-9a2.notion.site/DaemonSet-Job-CronJob-d3fd08aa986c43479ecef6ca69b5a2df){:target="_blank"}
- **(중급) Pod**
  - Pod - Lifecycle                     [<sub>Pod (Lifecycle)</sub>](https://inky-bug-9a2.notion.site/Pod-Lifecycle-f890c1c8fac145b4bc96ddee11ab842a){:target="_blank"}  
  - Pod - ReadinessProbe, LivenessProbe [<sub>Pod (ReadinessProbe, LivenessProbe)</sub>](https://inky-bug-9a2.notion.site/Pod-ReadinessProbe-LivenessProbe-0b5d9c09755d4e9ba9fd84ee229c0898){:target="_blank"}  
  - Pod - QoS Classes                   [<sub>Pod (QoS Classes)</sub>](https://inky-bug-9a2.notion.site/Pod-QoS-Classes-c09f43640f8c4e608949f32bf2cd358a){:target="_blank"}  
  - Pod - Node Scheduling               [<sub>Pod (Node Scheduling)</sub>](https://inky-bug-9a2.notion.site/Pod-Node-Scheduling-2d9b4f767bb74c568c96229c9b9adc3d){:target="_blank"}  
- **(중급) 기본 오브젝트**
  - Service - Headless, Endpoint, ExternalName                         [<sub>Service (Headless, Endpoint, ExternalName)</sub>](https://inky-bug-9a2.notion.site/Service-Headless-Endpoint-ExternalName-264ba44a0db141acb2842f6ff9129188){:target="_blank"}  
  - Volume - Dynamic Provisioning, StorageClass, Status, ReclaimPolicy [<sub>Volume (Dynamic Provisioning, StorageClass, Status, ReclaimPolicy)</sub>](https://inky-bug-9a2.notion.site/Volume-Dynamic-Provisioning-StorageClass-Status-ReclaimPolicy-7081229163074f23a6d3f4b6f7698aa9){:target="_blank"}  
  - Accessing API - Overview                                           [<sub>Accessing API (Overview)</sub>](https://inky-bug-9a2.notion.site/Accessing-API-Overview-c63616108aed4590a244b7dfad89aef1){:target="_blank"}  
  - Authentication - X509 Certs, kubectl, ServiceAccount               [<sub>Authentication (X509 Certs, kubectl, ServiceAccount)</sub>](https://inky-bug-9a2.notion.site/Authentication-X509-Certs-kubectl-ServiceAccount-0184906630e8496db7636cbbf1f58e64){:target="_blank"}  
  - Authorization - RBAC, Role, RoleBinding                            [<sub>Authorization (RBAC, Role, RoleBinding)</sub>](https://inky-bug-9a2.notion.site/Authorization-RBAC-Role-RoleBinding-7914f989e9324557809a8d775f6ecdf1){:target="_blank"}  
  - Kubernetes Dashboard                                               [<sub>Kubernetes Dashboard</sub>](){:target="_blank"}
- **(중급) 컨트롤러**
  - StatefulSet      [<sub>StatefulSet</sub>](){:target="_blank"}  
  - Ingress - Nginx  [<sub>Ingress (Nginx)</sub>](){:target="_blank"}  
  - Autoscaler - HPA [<sub>Autoscaler (HPA)</sub>](){:target="_blank"}  
- **(중급) 아키택처**
  - Component - kube-apiserver, etcd, kube-schedule, kube-proxy, kube-controlelr-manager [<sub>Component (kube-apiserver, etcd, kube-schedule, kube-proxy, kube-controlelr-manager)</sub>](){:target="_blank"}  
  - Networking - Pod / Service Network (Calico), Pause Container                         [<sub>Networking (Pod / Service Network (Calico), Pause Container)</sub>](){:target="_blank"}  
  - Storage - NFS(FileStorage), Longhorn(BlockStorage)                                   [<sub>Storage (NFS(FileStorage), Longhorn(BlockStorage))</sub>](){:target="_blank"}  
  - Logging - PLG Stack                                                                  [<sub>Logging (PLG Stack)</sub>](){:target="_blank"}  
　  
　  
　  

[link_study]:https://www.inflearn.com/course/%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4-%EA%B8%B0%EC%B4%88
