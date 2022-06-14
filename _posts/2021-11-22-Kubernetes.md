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
  - VM vs Container                      [<sub>VM 과 Container 비교</sub>](){:target="_blank"}  
  - Kubernetes Overview                  [<sub>쿠버네티스 훑어보기</sub> ](){:target="_blank"}  
- **(기초) 기본 오브젝트**
  - Pod - Container, Label, NodeSchedule        [<sub>Pod (Container, Label, NodeSchedule)</sub> ](){:target="_blank"}  
  - Service - ClusterIP, NodePort, LoadBalancer [<sub>Service (ClusterIP, NodePort, LoadBalancer)</sub>](){:target="_blank"}  
  - Volume - emptyDir, hostPath, PV/PVC         [<sub>Volume (emptyDir, hostPath, PVC/PV)</sub>](){:target="_blank"}  
  - ConfigMap, Secret - Env, Mount              [<sub>ConfigMap, Secret (Env, Mount)</sub>](){:target="_blank"}  
  - Namespace, ResourceQuota, LimitRange        [<sub>Namespace, ResourceQuota, LimitRange</sub>](){:target="_blank"}  
- **(기초) 컨트롤러**
  - Replication Controller, ReplicaSet - Template, Replicas, Selector [<sub>Replication Controller, ReplicaSet (Template, Replicas, Selector)</sub>](){:target="_blank"}  
  - Deployment - Recreate, RollingUpdate                              [<sub>Deployment (Recreate, RollingUpdate)</sub>](){:target="_blank"}  
  - DaemonSet, Job, CronJob                                           [<sub>DaemonSet, Job, CronJob</sub>](){:target="_blank"}
- **(중급) Pod**
  - Pod - Lifecycle                     [<sub>Pod (Lifecycle)</sub>](){:target="_blank"}  
  - Pod - ReadinessProbe, LivenessProbe [<sub>Pod (ReadinessProbe, LivenessProbe)</sub>](){:target="_blank"}  
  - Pod - QoS Classes                   [<sub>Pod (QoS Classes)</sub>](){:target="_blank"}  
  - Pod - Node Scheduling               [<sub>Pod (Node Scheduling)</sub>](){:target="_blank"}  
- **(중급) 기본 오브젝트**
  - Service - Headless, Endpoint, ExternalName                         [<sub>Service (Headless, Endpoint, ExternalName)</sub>](){:target="_blank"}  
  - Volume - Dynamic Provisioning, StorageClass, Status, ReclaimPolicy [<sub>Volume (Dynamic Provisioning, StorageClass, Status, ReclaimPolicy)</sub>](){:target="_blank"}  
  - Accessing API - Overview                                           [<sub>Accessing API (Overview)</sub>](){:target="_blank"}  
  - Authentication - X509 Certs, kubectl, ServiceAccount               [<sub>Authentication (X509 Certs, kubectl, ServiceAccount)</sub>](){:target="_blank"}  
  - Authorization - RBAC, Role, RoleBinding                            [<sub>Authorization (RBAC, Role, RoleBinding)</sub>](){:target="_blank"}  
  - Kubernetes Dashboard                                               [<sub>Kubernetes Dashboard</sub>](){:target="_blank"}
- **(중급) Pod**
  - StatefulSet      [<sub>StatefulSet</sub>](){:target="_blank"}  
  - Ingress - Nginx  [<sub>Ingress (Nginx)</sub>](){:target="_blank"}  
  - Autoscaler - HPA [<sub>Autoscaler (HPA)</sub>](){:target="_blank"}  
- **(중급) 아키택처**
  - Component - kube-apiserver, etcd, kube-schedule, kube-proxy, kube-controlelr-manager [<sub>Component (kube-apiserver, etcd, kube-schedule, kube-proxy, kube-controlelr-manager)</sub>](){:target="_blank"}  
  - Networking - Pod / Service Network (Calico), Pause Container                         [<sub>Networking (Pod / Service Network (Calico), Pause Container)</sub>](){:target="_blank"}  
  - Storage - NFS(FileStorage), Longhorn(BlockStorage)                                   [<sub>Storage (NFS(FileStorage), Longhorn(BlockStorage))</sub>](){:target="_blank"}  
  - Logging - PLG Stack                                                                  [<sub>Logging (PLG Stack)</sub>](){:target="_blank"}  
　  
　  
　  

[link_study]:https://www.inflearn.com/course/%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4-%EA%B8%B0%EC%B4%88
