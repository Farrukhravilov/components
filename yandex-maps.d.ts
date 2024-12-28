// yandex-maps.d.ts
declare module "ymaps" {
  export interface YMaps {
    Map: typeof ymaps.Map;
    Placemark: typeof ymaps.Placemark;
    multiRouter: {
      MultiRoute: typeof ymaps.multiRouter.MultiRoute;
    };
    ready: (callback: () => void) => void;
  }

  interface Window {
    ymaps: YMaps;
  }
}
