describe("테스트 스위트", () => {
  // 매번 각각의 테스트를 수행하기 전에 실행시킬 코드
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // 안녕이라고 입력할 경우 Hi.로 출력된다.
  it("번역할 텍스트 입력 시 번역 결과에 번역된 텍스트가 출력된다.", () => {
    // 특정 element 가져와서 타이핑 시도
    cy.get('[data-cy="source-textarea"]').type("안녕");

    // 번역된 결과에 Hi. 라고 출력되는지 확인
    cy.get('[data-cy="target-textarea"]').should("have.value", "Hi.");
  });

  it("다크 모드 토글을 클릭할 경우 다크 모드로 적용된다.", () => {
    cy.get('[data-cy="darkmode-toggle"]').click();
  });

  it("번역할 텍스트에 '안녕'이라고 입력 시 언어가 감지되어 한국어로 변경된다.", () => {
    cy.get('[data-cy="source-textarea"]').type("안녕");
    cy.get('[data-cy="source-language"]').should("have.value", "ko");
  })
});
