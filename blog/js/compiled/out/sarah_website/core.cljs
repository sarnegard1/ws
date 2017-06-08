(ns sarah-website.core
  (:require
    [sarah-website.index :as i]
    [sarah-website.centro :as c]
    [sarah-website.betabrand :as beta]
    [sarah-website.bookquest :as bq]
    [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(reagent/render-component [:div
                            [beta/content]
                            [c/content]
                            [bq/content]
                            [i/index]]
                          (. js/document (getElementById "app")))
                          ; [p/project1]
                          ; (. js/document (getElementById "app")))
(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
