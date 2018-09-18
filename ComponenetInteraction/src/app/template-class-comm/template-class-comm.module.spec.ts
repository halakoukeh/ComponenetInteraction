import { TemplateClassCommModule } from './template-class-comm.module';

describe('TemplateClassCommModule', () => {
  let templateClassCommModule: TemplateClassCommModule;

  beforeEach(() => {
    templateClassCommModule = new TemplateClassCommModule();
  });

  it('should create an instance', () => {
    expect(templateClassCommModule).toBeTruthy();
  });
});
