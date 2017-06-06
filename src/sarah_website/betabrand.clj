("<!DOCTYPE html>"
 [:html
  "<!--Project Page-->"
  [:head
   [:title "Sarah Arnegard"]
   [:meta
    {:name "viewport",
     :content "width=device-width, initial-scale=1.0"}]
   [:link {:rel "stylesheet", :href "css/normalize.css"}]
   [:link {:rel "stylesheet", :href "css/gridpak.css"}]
   [:link
    {:href
     "http://fonts.googleapis.com/css?family=Oswald:400|Raleway:400,700",
     :rel "stylesheet",
     :type "text/css"}]
   [:link
    {:rel "stylesheet",
     :href
     "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"}]
   [:link {:rel "stylesheet", :href "css/icomoon.css"}]
   [:link {:rel "stylesheet", :href "css/mobilefirst.css"}]
   [:script {:src "js/jquery-2.1.1.min.js"}]
   [:script {:src "js/carousel.js"}]]
  [:body
   "<!-- Google Tag Manager -->"
   [:noscript
    [:iframe
     {:src "//www.googletagmanager.com/ns.html?id=GTM-NHC94F",
      :height "0",
      :width "0",
      :style "display:none;visibility:hidden"}]]
   [:script
    "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-NHC94F');"]
   "<!-- End Google Tag Manager -->"
   "<!--insert header-->"
   [:div.page-wrap
    [:header
     [:div.navbar.container
      [:nav.row
       [:div.main-logo
        [:a {:href "index.html"}]
        [:h1 "Sarah Arnegard"]
        "<!--                            <img src=\"images/logo.svg\" alt=\"Sarah Arnegard\">-->"
        [:h2 "User Experience Designer"]]
       [:ul
        [:li " " [:a {:href "http://saraharnegard.com"} "Work"]]
        [:li [:a.blog {:href "http://blog.saraharnegard.com"} "Blog"]]
        [:li [:a.about {:href "about.html"} "About"]]
        [:li [:a {:href "resume.html"} "Resume"]]]]]]
    "<!-- ////////////////////// about & contact /////////////////////// -->"
    "<!--\n            <div class=\"about\">\n\n                <h1 class=\"about-copy\">Hello, I'm Sarah!</h1>\n                <p>I'm a UX Designer based in the San Francisco Bay Area. I think a designer&#39;s most valuable skills are listening and asking questions. View my <a href=\"Resume.pdf\">resume &#40;pdf&#41;</a></p>\n                 <a class=\"close\" href=\"#\"><span class=\"glyphicon glyphicon-chevron-up\"></a>\n\n            </div>\n-->"
    "<!-- ////////////////////// project area /////////////////////// -->"
    [:h1.project "Betabrand Redesign"]
    [:div.container
     [:section.project-header
      [:div.row
       [:div#carousel-beta-generic.col.span6.carousel.slide
        {:data-ride "carousel", :data-interval "false"}
        "<!-- Indicators -->"
        [:ol.carousel-indicators
         [:li.active
          {:data-target "#carousel-beta-generic", :data-slide-to "0"}]
         [:li
          {:data-target "#carousel-beta-generic", :data-slide-to "1"}]
         [:li
          {:data-target "#carousel-beta-generic", :data-slide-to "2"}]
         [:li
          {:data-target "#carousel-beta-generic", :data-slide-to "3"}]
         [:li
          {:data-target "#carousel-beta-generic", :data-slide-to "4"}]]
        "<!-- Wrapper for slides -->"
        [:div.carousel-inner
         [:div.item.active
          [:img {:src "images/beta/Home.png", :alt "..."}]
          [:div.carousel-caption
           "\n                     Home Page - home page is decluttered, featuring only a few unique products rather than overwhelming the user\n                     "]]
         [:div.item
          [:img {:src "images/beta/Category_page.png", :alt "..."}]
          [:div.carousel-caption
           "\n                     Product Category Page - added faceted navigation.\n                     "]]
         [:div.item
          [:img {:src "images/beta/Product_page.png", :alt "..."}]
          [:div.carousel-caption
           "\n                     Product Page- created tabs to hold additional information to decrease info hidden below the fold\n                     "]]
         [:div.item
          [:img {:src "images/beta/Checkout.png", :alt "..."}]
          [:div.carousel-caption
           "\n                        One Page Checkout- this would provide better visibility to the user to reduce errors\n                     "]]
         [:div.item
          [:img {:src "images/beta/Order_review.png", :alt "..."}]
          [:div.carousel-caption
           "\n                     Order Review- allows user to double check all information before placing order\n                     "]]]
        "<!-- Controls -->"
        [:a.left.carousel-control
         {:href "#carousel-beta-generic",
          :role "button",
          :data-slide "prev"}
         [:span.glyphicon.glyphicon-chevron-left]]
        [:a.right.carousel-control
         {:href "#carousel-beta-generic",
          :role "button",
          :data-slide "next"}
         [:span.glyphicon.glyphicon-chevron-right]]]
       "<!---->"
       [:div.overview.col.span6
        [:h2 "Challenge"]
        [:p
         "\n                                Betabrand is a clothing company based in San Francisco that carries unique and quirky products, including crowdsourced products. They have a small cult following but would like to expand their reach. Currently, their website is poorly organized, making it extremely difficult to locate products. In addition, the crowdfunding process is poorly explained and difficult to complete.\n                            "]]]]
     [:section.container
      [:h2 "Process"]
      [:p
       "I began by assesing the usability of the site, and conducting card sorting of product categories. I also did a lot of competitive analysis of ecommerce sites."]
      [:img.span9.constrain.deck
       {:src "images/beta/deck/sarah_arnegard_project2.001.jpg",
        :alt ""}]
      [:img.span9.constrain.deck
       {:src "images/beta/deck/sarah_arnegard_project2.002.jpg",
        :alt ""}]
      [:div.span9.constrain
       [:h3 "Sketches"]
       [:img.deck
        {:src "images/beta/deck/project2/project2.008.jpg", :alt ""}]]
      [:img.span9.constrain.deck
       {:src "images/beta/deck/project2/project2.009.jpg", :alt ""}]
      [:img.span9.constrain.deck
       {:src "images/beta/deck/project2/project2.010.jpg", :alt ""}]
      [:img.span9.constrain.deck
       {:src "images/beta/deck/project2/project2.011.jpg", :alt ""}]]
     [:section.container
      [:h2 "Prototype"]
      [:div.button-container
       [:a.button-link
        {:target "_blank", :href "http://invis.io/7R18S468P"}
        "View Prototype"]
       [:small "This will open Invision in a new tab"]]]]
    "<!--  /////////////////////////  Begin Footer  //////////////////////   -->"]
   [:footer
    [:div.container
     [:ul
      [:li
       [:a.icon-linkedin
        {:href "https://www.linkedin.com/in/saraharnegard/"}]]
      [:li [:a.icon-mail {:href "mailto:saraharnegard@gmail.com"}]]
      [:li [:a.icon-twitter {:href "https://twitter.com/hey_arne"}]]]
     [:div.col-md-4.col-md-offset-4
      "  "
      [:p "This site was designed and coded by me."]
      [:p
       "\n                        Grid system was generated with "
       [:a {:href "http://gridpak.com/"} "Gridpak."]
       " Icons from "
       [:a
        {:href "http://getbootstrap.com/components/"}
        "Bootstrap Glypicons"]
       " and "
       [:a {:href "https://icomoon.io/"} "Icomoon"]
       ". I'm also using the "
       [:a
        {:href "http://getbootstrap.com/javascript/#carousel"}
        "Bootstrap Carousel Plugin"]
       " and typefaces served by "
       [:a {:href "https://www.google.com/fonts"} "Google Fonts"]
       ".\n                    "]
      "<!--</div>\n                <p>this site was designed and coded by me</p>\n                <small>&copy; Sarah Arnegard 2014</small>\n-->"]]]
   [:script {:src "js/jquery-1.3.2.min.js"}]
   [:script {:src "js/experiment.js"}]]])
