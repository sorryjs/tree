declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}


declare module 'dayjs/dist/locale/*' {
  import { LocaleSpecification } from 'dayjs';
  const locale: LocaleSpecification & ReadonlyRecordable;
  export default locale;
}

declare module 'virtual:*' {
  const result: any;
  export default result;
}

declare module 'uuid';
