(ns sarah-website.core
  (:require
    [sarah-website.index :as i]
    [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(reagent/render-component [i/index]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
