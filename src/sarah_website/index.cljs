(ns sarah-website.index)

(defn nav []
  [:div.container-lrg
   [:div.col-12.spread
    [:div [:a.logo "Sarah Arnegard"]]
    [:div
     [:a.nav-link {:href "#work"} "Work "]
     [:a.nav-link {:href "https://blog.saraharnegard.com"} "Blog"]
     [:a.nav-link
      {:href "/resume.html"}
      "Resume"]]]])
(defn about-me []
  [:div.container-sml.text-center
   [:div.col-12
    [:h1.heading
     "What drives me: I’m driven by discovering insights that lead to meaningful improvements in people’s lives"]]])

(defn more-projects [{:keys [project-title project-desc project-link]}]
  [:div
    [:h4 project-title]
    [:p  project-desc]
    [:a.hvr-grow
      {:href project-link}
      "Read more"]])

(def project-info
  [{:project-title "Centro Business Advising"
    :project-desc  "I worked with Centro Community Partners to design a business advising app based on their business advising. I worked on user research, scope definition and interaction design."
    :project-link  "http://saraharnegard.com/centro.html"}
   {:project-title "Scholastic BookQuest"
    :project-desc  " I conducted user research and competitive research to design a reading engagement app for children"
    :project-link  "http://saraharnegard.com/BookQuest.html"}
   {:project-title "BetaBrand E-commerce checkout"
    :project-desc  "Information architecture for product display and purchasing flows"
    :project-link  "http://saraharnegard.com/betabrand.html"}])



(defn index []
  [:html
    [:head
     [:title "Sarah Arnegard - Welcome to my site"]
     [:meta {:charset "utf-8"}]
     [:meta
      {:name "viewport", :content "width=device-width,initial-scale=1"}]
     [:link
      {:href
       "https://fonts.googleapis.com/css?family=Fira+Sans|Palanquin+Dark",
       :rel "stylesheet"}]
     "<!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"> -->"
     [:link {:rel "stylesheet", :type "text/css", :href "css/main.css"}]
     [:link
      {:rel "stylesheet", :type "text/css", :href "css/devices.css"}]]
    [:body
     [:header.header
      [nav []]
      [about-me[]]]

     [:div.feature3
      [:div.container-lrg.flex
       "What I specialize in:  "
       [:div.col-4
        [:h3.subheading
         "    Research and experiment design    "]
        [:p.paragraph
         "      Whether it's discovering pains or testing product market fit, I prefer to test hypotheses and examine evidence rather than argue about assumptions.    "]]
       [:div.col-4
        [:h3.subheading
         "      Product and service design    "]
        [:p.paragraph
         "      Rapid ideation, prototyping, and testing that involves the team in the process of reaching a solution that delights our customers.    "]]
       [:div.col-4
        [:h3.subheading
         "      Collaboration and facilitation    "]
        [:p.paragraph
         "      I'm passionate about bringing the team on the journey from empathy to solution, rather than work in a silo. It's my mission to improve the user centered design skills.    "]]]]
     [:div.feature4
      [:div.container-lrg [:h2 "What I've worked on"]]
      [:div.container-lrg.flex
       [:div.col-6.flex
        [:div.androidiphone.sidedevices
         [:div.phones
          [:img {:src "img/phone_tyro.png", :alt ""}]
          "<!-- <div class=\"iphone\">          <div class=\"mask\">            <img class=\"mask-img\" src=\"img/ios_app.png\">          </div>        </div>        <div class=\"android\">          <div class=\"mask\">            <img class=\"mask-img\" src=\"img/android_app.png\">          </div>        </div> -->"]]]
       [:div.col-1]
       [:div.col-5.centervertical
        [:h3.subheading "      Tyro Payments    "]
        [:p.paragraph
         "      I was hired as a generalist Product Designer to work on "
         [:a
          {:href "https://tyro.com/business-loans/"}
          "Tyro Smart Growth Funding"]
         ", the first business lending product that allows customers to accept loans on a mobile platform, eliminating the need for paper applications and phone calls.    "]
        [:p.paragraph
         "      Later on I specialized in Customer Research, working on discovery research, experiment design, and strategy for the loans product. "
         [:a {:href "View my complete resume"}]]
        "<!-- <button type=\"button\" name=\"button\">Read more</button> -->"]]]
     [:div.feature4
      [:div.container-lrg.flex
       [:div.col-5.centervertical
        [:h3.subheading "      Sookasa Inc    "]
        [:p.paragraph
         "      As the only full time designer for "
         [:a {:href "https://www.sookasa.com/"} "Sookasa"]
         ", I worked on a wide range of products including signup optimization, a full "
         [:a {:href "#"} "UI redesign"]
         ", and a new threat scanning product    "]
        "<!-- <button type=\"button\" name=\"button\">Read more</button> -->"]
       [:div.col-1]
       [:div.col-6
        [:div.sidedevices
         [:div.computerwrapper
          [:img.mask-img {:src "img/mac_book.png"}]
          "<!-- <div class=\"computer\">          <div class=\"mask\">    </div>        </div> -->"]]]]]
     [:div.feature2
      [:div.container-lrg
        [:h2 "Additional projects"]
        (map more-projects project-info)]
      [:div.container-lrg.flex]]

     [:div.socialproof
      [:div.container-sml
       [:div.text-center
        [:div.col-12
         [:h4
          "        What people say about me      "]]]]
      [:div.container-lrg
       [:div.tweets.flex
        [:div.col-4
         [:div.testimonial
          [:div.flex.flexvert
           [:div
            [:b "              James Taylor            "]
            [:br]
            [:span
             "              Design Lead at Tyro            "]]]
          [:div.testimonial-content
           [:p.paragraph
            "            Sarah joined Tyro at a pretty crucial time, upon embarking the journey to launch our lending product. She showed great leadership skills, managing the research for many concurrent streams of research around our customers while truly caring about delivering meaningful, helpful solutions.          "]]]]
        [:div.col-4
         [:div.testimonial
          [:div.flex.flexvert
           [:div
            [:b "              Will Jensen            "]
            [:br]
            [:span
             "              CEO at Fetchh            "]]]
          [:div.testimonial-content
           [:p.paragraph
            "            After Sarah joined the team, she hit the ground running. Sarah was an amazing asset for us, helping us with not just prototypes and development - but with higher-level thinking about our strategy and overall usability. We surely wouldn't have achieved as much as we wanted without Sarah's help. I would highly recommend Sarah and hope to work together again in the future.        "]]]]
        [:div.col-4
         [:div.testimonial
          [:div.flex.flexvert
           [:div
            [:b "              Dan Manian            "]
            [:br]
            [:span
             "              Direct manager at Sookasa            "]]]
          [:div.testimonial-content
           [:p.paragraph
            "            Sarah joined as Sookasa's first full-time designer and has been instrumental in both elevating the design of our existing products, as well as launching new ones. She owns the entire design process from user research, wireframing, and user testing through HTML/CSS execution, working hand-in-hand with engineering. The breadth of her skills and ability to work both independently and collaboratively make her a huge asset on any team.          "]]]]]]]
     [:div.footer
      [:div.container-sml
       [:div.col-12.text-center
        [:div
         [:a.nav-link
          {:href "https://www.linkedin.com/in/saraharnegard/"}
          "        LinkedIn      "]
         [:a.nav-link
          {:href "mailto:sarah.arnegard@gmail.com"}
          "        Email      "]
         [:a.nav-link
          {:href "https://blog.saraharnegard.com/"}
          "        Blog      "]]
        [:br]
        [:div
         [:span
          "        © 2017 Sarah Arnegard      "]]]]]]])
