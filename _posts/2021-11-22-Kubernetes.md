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

- **(기초) 기초 다지기**
  - Why Kubernetes?                      [<sub>쿠버네티스 사용 이유</sub>](https://xxxelppa.tistory.com/347){:target="_blank"}  
  - VM vs Container                      [<sub>VM 과 Container 비교</sub>](https://xxxelppa.tistory.com/348){:target="_blank"}  
  - Kubernetes Overview                  [<sub>쿠버네티스 훑어보기</sub> ](https://xxxelppa.tistory.com/349){:target="_blank"}  
- **(기초) 기본 오브젝트**
  - Pod - Container, Label, NodeSchedule        [<sub>Pod (Container, Label, NodeSchedule)</sub> ](https://xxxelppa.tistory.com/350){:target="_blank"}  
  - Service - ClusterIP, NodePort, LoadBalancer [<sub>Service (ClusterIP, NodePort, LoadBalancer)</sub>](https://xxxelppa.tistory.com/351){:target="_blank"}  
  - Volume - emptyDir, hostPath, PV/PVC         [<sub>Volume (emptyDir, hostPath, PVC/PV)</sub>](https://xxxelppa.tistory.com/352){:target="_blank"}  
  - ConfigMap, Secret - Env, Mount              [<sub>ConfigMap, Secret (Env, Mount)</sub>](https://xxxelppa.tistory.com/353){:target="_blank"}  
  - Namespace, ResourceQuota, LimitRange        [<sub>Namespace, ResourceQuota, LimitRange</sub>](https://xxxelppa.tistory.com/354){:target="_blank"}  
- **(기초) 컨트롤러**
  - Replication Controller, ReplicaSet - Template, Replicas, Selector [<sub>Replication Controller, ReplicaSet (Template, Replicas, Selector)</sub>](https://xxxelppa.tistory.com/355){:target="_blank"}  
  - Deployment - Recreate, RollingUpdate                              [<sub>Deployment (Recreate, RollingUpdate)</sub>](https://xxxelppa.tistory.com/356){:target="_blank"}  
  - DaemonSet, Job, CronJob                                           [<sub>DaemonSet, Job, CronJob</sub>](https://xxxelppa.tistory.com/358){:target="_blank"}
- **(중급) Pod**
  - Pod - Lifecycle                     [<sub>Pod (Lifecycle)</sub>](https://xxxelppa.tistory.com/359){:target="_blank"}  
  - Pod - ReadinessProbe, LivenessProbe [<sub>Pod (ReadinessProbe, LivenessProbe)</sub>](https://xxxelppa.tistory.com/360){:target="_blank"}  
  - Pod - QoS Classes                   [<sub>Pod (QoS Classes)</sub>](https://xxxelppa.tistory.com/361){:target="_blank"}  
  - Pod - Node Scheduling               [<sub>Pod (Node Scheduling)</sub>](https://xxxelppa.tistory.com/362){:target="_blank"}  
- **(중급) 기본 오브젝트**
  - Service - Headless, Endpoint, ExternalName <sub>Service (Headless, Endpoint, ExternalName)</sub>  
  - Volume - Dynamic Provisioning, StorageClass, Status, ReclaimPolicy <sub>Volume (Dynamic Provisioning, StorageClass, Status, ReclaimPolicy)</sub>  
  - Accessing API - Overview <sub>Accessing API (Overview)</sub>  
  - Authentication - X509 Certs, kubectl, ServiceAccount <sub>Authentication (X509 Certs, kubectl, ServiceAccount)</sub>  
  - Authorization - RBAC, Role, RoleBinding <sub>Authorization (RBAC, Role, RoleBinding)</sub>  
  - Kubernetes Dashboard <sub>Kubernetes Dashboard</sub>
- **(중급) Pod**
  - StatefulSet <sub>StatefulSet</sub>  
  - Ingress - Nginx <sub>Ingress (Nginx)</sub>  
  - Autoscaler - HPA <sub>Autoscaler (HPA)</sub>  
- **(중급) 아키택처**
  - Component - kube-apiserver, etcd, kube-schedule, kube-proxy, kube-controlelr-manager <sub>Component (kube-apiserver, etcd, kube-schedule, kube-proxy, kube-controlelr-manager)</sub>  
  - Networking - Pod / Service Network (Calico), Pause Container <sub>Networking (Pod / Service Network (Calico), Pause Container)</sub>  
  - Storage - NFS(FileStorage), Longhorn(BlockStorage) <sub>Storage (NFS(FileStorage), Longhorn(BlockStorage))</sub>  
  - Logging - PLG Stack <sub>Logging (PLG Stack)</sub>  
　  
　  
　  

[link_study]:https://www.inflearn.com/course/%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4-%EA%B8%B0%EC%B4%88
