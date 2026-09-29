// 공개 전 실제 담당 범위와 구현 상태를 확인하세요. 검증되지 않은 성과 수치는 넣지 않았습니다.
export const profile = {
  name: "정유선",
  headline: "요구사항을 서비스 기능으로 연결하는 플랫폼 개발자",
  introduction:
    "웹 시스템의 요구사항 분석, 화면·데이터 설계, API 개발과 기능 검증을 경험했습니다. 사용자의 업무 흐름을 이해하고 운영을 고려한 기능을 구현합니다.",
  email: "", // 공개 가능한 연락처를 원할 때만 입력
  github: "", // 공개 가능한 개인 GitHub 주소를 원할 때만 입력
};

export const skills = [
  { group: "Backend", items: ["Java", "Spring Boot", "REST API", "MyBatis"] },
  { group: "Frontend", items: ["React", "JavaScript", "UI 구현"] },
  { group: "Data & Tools", items: ["PostgreSQL", "SQL", "Jira", "Figma"] },
];

export const projects = [
  {
    number: "01",
    label: "개인 수행 · Pilot",
    title: "AI 기반 인력 추천 시스템",
    summary:
      "인력과 기술·경력 정보를 관리하고, 필요한 인력을 찾는 업무 흐름을 웹 서비스로 구성한 Pilot 프로젝트입니다.",
    problem:
      "분산된 인력 정보를 확인하고 조건에 맞는 인력을 찾는 과정에 반복적인 조회 작업이 있었습니다.",
    role: "요구사항 정리, 데이터 모델 설계, React 화면 개발, Spring Boot API 개발, 인증·권한 및 기능 검증",
    contributions: [
      "인력·기술 스택·경력 정보를 관리하는 화면과 API 구성",
      "자연어 조건을 입력하는 인력 탐색 흐름 설계 및 Pilot 구현",
      "회원·권한 구조와 DB 테이블을 설계하고 화면과 API를 연동",
    ],
    result:
      "내부 Pilot으로 구현하고 실데이터 적용 및 확대 방향을 검토했습니다.",
    stack: ["React", "Spring Boot", "Java", "PostgreSQL"],
    note: "AI 연동 방식과 추천 동작 범위는 실제 구현 내용을 확인한 뒤 구체화하세요.",
  },
  {
    number: "02",
    label: "업무 프로젝트 · 개발 참여",
    title: "차량 배터리 충전 통합 모니터링",
    summary:
      "장비 상태와 기간별 현황을 조회하고 데이터를 활용할 수 있도록 지원하는 모니터링 시스템입니다.",
    problem:
      "장비 상태와 기간별 현황을 한 화면에서 확인하고 조회 결과를 내려받을 수 있는 기능이 필요했습니다.",
    role: "Spring Boot·MyBatis·PostgreSQL 기반 REST API 개발 및 조회 기능 구현 참여",
    contributions: [
      "장비 상태 수집 데이터를 조회하는 API 및 화면 연동 기능 개발",
      "기간별 현황 조회와 Excel 다운로드 기능 구현",
      "작업 폴더 조회·다운로드 관련 기능 개발",
    ],
    result:
      "운영자가 상태와 이력을 조회하고 필요한 데이터를 내려받을 수 있도록 기능을 구성했습니다.",
    stack: ["Java", "Spring Boot", "MyBatis", "PostgreSQL", "Kafka"],
    note: "Kafka 관련 표현은 직접 구현한 범위와 시스템 연동 범위를 구분해 확인하세요.",
  },
  {
    number: "03",
    label: "업무 경험 · 품질 및 협업",
    title: "차량용 소프트웨어 빌드·검증",
    summary:
      "Linux 기반 단말 소프트웨어의 빌드·배포·기능 검증과 결함 대응을 수행했습니다.",
    problem:
      "기능 오류가 발생했을 때 재현 조건과 로그가 정확해야 개발팀이 원인을 빠르게 파악할 수 있었습니다.",
    role: "단말 세팅, 오류 재현, 로그 수집, Jira 이슈 관리, 수정 빌드 재검증",
    contributions: [
      "맵 표출 오류를 재현하고 발생 조건과 단말 로그를 정리해 개발팀과 공유",
      "수정 빌드의 기능을 재검증하고 결과를 배포 흐름에 반영",
      "검증 절차를 정리하고 2인 로테이션 운영 방식 구축에 참여",
    ],
    result:
      "개발팀과 원인 분석 및 재검증을 진행해 일정 내 안정화에 기여했습니다.",
    stack: ["Linux", "Jira", "Log analysis", "QA"],
  },
  {
    number: "04",
    label: "진행 중 · 프론트엔드 개발",
    title: "자율주행 차량 관제시스템",
    summary:
      "차량 상태를 실시간으로 확인하고 원격 명령을 요청할 수 있는 관제 화면을 개발하고 있습니다.",
    problem:
      "관제 화면에 필요한 차량 상태 필드가 API 응답에 누락되어 있었고, 상태별 표시 방식과 일부 사용자 흐름도 정의가 필요했습니다.",
    role: "관제 화면 프론트엔드 개발, 차량 상태 API 연동, 원격 명령 요청 화면 구현, 백엔드·기획·고객사 협의",
    contributions: [
      "좌석·안전벨트·문 잠금·타이어 압력 등 차량 내부·외부 상태 데이터를 화면에 연동",
      "원격 명령 요청 화면과 관련 데이터 관리 기능 구현",
      "화면에 필요한 API 필드와 사용 위치를 정리해 백엔드 담당자와 응답 형식 협의",
      "상태별 색상, 채널별 지연 시간·재시도 표시와 사용자 흐름의 개선 사항을 제안",
    ],
    result:
      "누락된 데이터와 미정의 화면 동작을 구체화하고, 고객사와 개선 방향을 협의해 반영을 진행하고 있습니다.",
    stack: ["React", "TypeScript", "REST API", "Figma", "Jira"],
  },
];
