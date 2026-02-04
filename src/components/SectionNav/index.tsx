"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./SectionNav.module.scss";

const SectionNav = () => {
  const [viewportTop, setViewportTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const minimapContentRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const isInitializedRef = useRef<boolean>(false);

  // 뷰포트 위치 업데이트 (상태만 업데이트, 미니맵 콘텐츠 재생성 없음)
  const updateViewport = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
    const viewportHeight = window.innerHeight;
    const totalDocHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      document.documentElement.offsetHeight,
      document.body.offsetHeight
    );

    setViewportTop(scrollTop);
    setViewportHeight(viewportHeight);
    setTotalHeight(totalDocHeight);
  };

  // 미니맵 콘텐츠 복제 및 업데이트 (아코디언 상태 포함)
  const cloneMinimapContent = () => {
    const mainContent = document.querySelector("main");
    const minimapContent = minimapContentRef.current;
    
    if (!mainContent || !minimapContent) return false;

    // 기존 내용 제거
    minimapContent.innerHTML = "";
    
    // 메인 콘텐츠 복제
    const clonedContent = mainContent.cloneNode(true) as HTMLElement;
    
    // 복제된 콘텐츠에서 아코디언 상태를 실제 상태와 동기화
    const syncAccordionState = (original: Element, cloned: Element) => {
      const originalEl = original as HTMLElement;
      const clonedEl = cloned as HTMLElement;
      if (!originalEl || !clonedEl) return;

      // 실제 열림/닫힘 상태 확인
      const isOpen = originalEl.classList.contains('careerContentsOpen') ||
                    originalEl.classList.contains('projectDetailsOpen') ||
                    originalEl.classList.contains('activityBodyOpen') ||
                    originalEl.getAttribute('aria-hidden') === 'false';

      // 복제된 요소에 동일한 상태 적용
      if (isOpen) {
        if (originalEl.classList.contains('careerContentsOpen')) {
          clonedEl.classList.add('careerContentsOpen');
        }
        if (originalEl.classList.contains('projectDetailsOpen')) {
          clonedEl.classList.add('projectDetailsOpen');
        }
        if (originalEl.classList.contains('activityBodyOpen')) {
          clonedEl.classList.add('activityBodyOpen');
        }
        clonedEl.setAttribute('aria-hidden', 'false');
        
        const computedStyle = window.getComputedStyle(originalEl);
        clonedEl.style.maxHeight = computedStyle.maxHeight === '0px' ? '1200px' : computedStyle.maxHeight;
        clonedEl.style.opacity = computedStyle.opacity;
        clonedEl.style.padding = computedStyle.padding;
      } else {
        clonedEl.classList.remove('careerContentsOpen', 'projectDetailsOpen', 'activityBodyOpen');
        clonedEl.setAttribute('aria-hidden', 'true');
        clonedEl.style.maxHeight = '0';
        clonedEl.style.opacity = '0';
      }
    };

    // 각 아코디언 요소 동기화
    const originalCareerContents = mainContent.querySelectorAll('.careerContents');
    const clonedCareerContents = clonedContent.querySelectorAll('.careerContents');
    originalCareerContents.forEach((original, index) => {
      syncAccordionState(original, clonedCareerContents[index]);
    });

    const originalProjectDetails = mainContent.querySelectorAll('.projectDetails');
    const clonedProjectDetails = clonedContent.querySelectorAll('.projectDetails');
    originalProjectDetails.forEach((original, index) => {
      syncAccordionState(original, clonedProjectDetails[index]);
    });

    const originalActivityBody = mainContent.querySelectorAll('.activityBody');
    const clonedActivityBody = clonedContent.querySelectorAll('.activityBody');
    originalActivityBody.forEach((original, index) => {
      syncAccordionState(original, clonedActivityBody[index]);
    });

    clonedContent.style.position = "absolute";
    clonedContent.style.top = "0";
    clonedContent.style.left = "0";
    clonedContent.style.width = `${window.innerWidth}px`;
    clonedContent.style.pointerEvents = "none";
    
    minimapContent.appendChild(clonedContent);
    return true;
  };

  // 미니맵 콘텐츠 스케일 업데이트
  const updateMinimapScale = () => {
    const minimapContent = minimapContentRef.current;
    const container = containerRef.current;
    if (!minimapContent || !container) return;

    const totalDocHeight = document.documentElement.scrollHeight;
    const minimapHeight = container.offsetHeight;
    const minimapWidth = container.offsetWidth;
    
    if (totalDocHeight === 0) return;

    const pageWidth = window.innerWidth;
    const pageHeight = totalDocHeight;

    const scaleX = minimapWidth / pageWidth;
    const scaleY = minimapHeight / pageHeight;
    const scale = Math.min(scaleX, scaleY);

    minimapContent.style.transform = `scale(${scale})`;
    minimapContent.style.transformOrigin = "top left";
    minimapContent.style.width = `${pageWidth}px`;
    minimapContent.style.height = `${pageHeight}px`;
  };

  // 하이라이트 위치 업데이트 함수
  const updateHighlightPosition = () => {
    const highlight = highlightRef.current;
    const container = containerRef.current;
    if (!highlight || !container) return;

    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
    const currentViewportHeight = window.innerHeight;
    const currentTotalHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      document.documentElement.offsetHeight,
      document.body.offsetHeight
    );

    if (currentTotalHeight === 0) return;

    const minimapHeight = container.offsetHeight;
    const top = (currentScrollTop / currentTotalHeight) * minimapHeight;
    const height = (currentViewportHeight / currentTotalHeight) * minimapHeight;
    const minHeight = Math.max(height, 4);

    highlight.style.top = `${top}px`;
    highlight.style.height = `${minHeight}px`;
  };

  useEffect(() => {
    // 1. 초기 미니맵 콘텐츠 생성 (한 번만)
    const initializeMinimap = () => {
      if (isInitializedRef.current) return;
      
      const totalDocHeight = document.documentElement.scrollHeight;
      if (totalDocHeight === 0) {
        requestAnimationFrame(() => {
          setTimeout(initializeMinimap, 100);
        });
        return;
      }

      if (cloneMinimapContent()) {
        isInitializedRef.current = true;
        updateViewport();
        updateMinimapScale();
        requestAnimationFrame(() => {
          updateHighlightPosition();
        });
      }
    };

    requestAnimationFrame(() => {
      setTimeout(initializeMinimap, 300);
    });

    // 2. 스크롤 이벤트: 하이라이트만 업데이트 (콘텐츠 재생성 없음)
    let scrollRafId: number | null = null;
    const handleScroll = () => {
      if (scrollRafId !== null) {
        cancelAnimationFrame(scrollRafId);
      }
      scrollRafId = requestAnimationFrame(() => {
        updateViewport(); // 상태만 업데이트
        updateHighlightPosition(); // 하이라이트만 업데이트
        scrollRafId = null;
      });
    };

    // 3. 리사이즈 이벤트: 스케일만 업데이트
    const handleResize = () => {
      updateViewport();
      updateMinimapScale();
      updateHighlightPosition();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // 4. 아코디언 상태 변경 감지: 미니맵 콘텐츠 재생성
    const accordionElements: HTMLElement[] = [];
    
    const setupAccordionObserver = () => {
      // 아코디언 요소들 찾기
      const careerContents = document.querySelectorAll('.careerContents');
      const projectDetails = document.querySelectorAll('.projectDetails');
      const activityBody = document.querySelectorAll('.activityBody');
      
      accordionElements.length = 0;
      careerContents.forEach(el => accordionElements.push(el as HTMLElement));
      projectDetails.forEach(el => accordionElements.push(el as HTMLElement));
      activityBody.forEach(el => accordionElements.push(el as HTMLElement));

      // 각 아코디언 요소에 MutationObserver 연결
      accordionElements.forEach((element) => {
        const observer = new MutationObserver((mutations) => {
          let shouldUpdate = false;
          
          mutations.forEach((mutation) => {
            if (mutation.type === 'attributes') {
              const attrName = mutation.attributeName;
              if (attrName === 'class' || attrName === 'aria-hidden' || attrName === 'style') {
                shouldUpdate = true;
              }
            }
          });

          if (shouldUpdate) {
            // 아코디언 상태 변경 시 미니맵 콘텐츠 재생성
            requestAnimationFrame(() => {
              cloneMinimapContent();
              updateMinimapScale();
              updateViewport();
              updateHighlightPosition();
            });
          }
        });

        observer.observe(element, {
          attributes: true,
          attributeFilter: ["class", "aria-hidden", "style"],
        });

        // cleanup을 위해 observer를 element에 저장
        (element as any).__minimapObserver = observer;
      });
    };

    // 초기 아코디언 요소 설정 (약간의 지연 후)
    setTimeout(() => {
      setupAccordionObserver();
    }, 500);

    // 주기적으로 아코디언 요소 재확인 (동적으로 추가될 수 있으므로)
    const accordionCheckInterval = setInterval(() => {
      const currentCareerContents = document.querySelectorAll('.careerContents');
      const currentProjectDetails = document.querySelectorAll('.projectDetails');
      const currentActivityBody = document.querySelectorAll('.activityBody');
      
      const totalCount = currentCareerContents.length + currentProjectDetails.length + currentActivityBody.length;
      if (totalCount !== accordionElements.length) {
        // 기존 observer 정리
        accordionElements.forEach((el) => {
          if ((el as any).__minimapObserver) {
            (el as any).__minimapObserver.disconnect();
          }
        });
        // 새로운 observer 설정
        setupAccordionObserver();
      }
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (scrollRafId !== null) {
        cancelAnimationFrame(scrollRafId);
      }
      clearInterval(accordionCheckInterval);
      // 모든 observer 정리
      accordionElements.forEach((el) => {
        if ((el as any).__minimapObserver) {
          (el as any).__minimapObserver.disconnect();
        }
      });
    };
  }, []);

  // 뷰포트 변경 시 하이라이트 업데이트
  useEffect(() => {
    updateHighlightPosition();
  }, [viewportTop, viewportHeight, totalHeight]);

  // 미니맵 클릭 시 해당 위치로 스크롤
  const handleMinimapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || totalHeight === 0) return;

    const rect = container.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const clickPercent = clickY / rect.height;
    const targetScrollTop = clickPercent * totalHeight;

    window.scrollTo({
      top: targetScrollTop - viewportHeight / 2,
      behavior: "smooth",
    });
  };

  return (
    <nav className={styles.sectionNav} aria-label="섹션 네비게이션" ref={containerRef}>
      <div className={styles.minimap} onClick={handleMinimapClick}>
        <div className={styles.minimapContent} ref={minimapContentRef} />
        <div
          ref={highlightRef}
          className={styles.highlightBox}
        />
      </div>
    </nav>
  );
};

export default SectionNav;
