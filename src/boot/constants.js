import { boot } from 'quasar/wrappers'; // quasar/wrappers 에서 boot 를 가져온다

// boot 함수 안에 콜백으로 애플리케이션 인스턴스 전달
export default boot(({ app }) => {
  app.config.globalProperties.hello = 'Hello Quasar!!';
});
