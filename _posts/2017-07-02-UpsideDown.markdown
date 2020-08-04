---
layout: post
title: "Upside Down House"
date: 2020-07-02
categories: project
tags: Architecture
image: https://dl.dropboxusercontent.com/s/om28wuf7kkb4w6m/MyolaGrid.png?dl=0
---

![External Appearance](https://dl.dropboxusercontent.com/s/bcalltq7f16ta8j/MyolaFacade_LARGE.png?dl=0){:class="img-responsive"}

The Upside Down House is a three-bedroom farm house designed and built for a relative when working at the practice [Supermanoeuvre](http://www.supermanoeuvre.com/). While one side of the house supports a working sheep farm, the other provides a peaceful living environment that visuallt connects to the rural landscape. The availability of locally grown and procesed Cyprus pine provided two opportunities for the project, to engage with an established local material knowledge and to deter termite damage, a significant risk to housing in that area. 

The client brief placed a primacy on high thermal efficiency and a requirement to connect living spaces to identified views of the landscape. As a response, the Upside Down House inverted the traditional rural farmhouse of flat ceilings and pitched roofs, to provide a flat roof with an undulating ceiling. This design move framed connections to the landscape, offered ample space in the roof for rainwater and solar harvesting, and retained an insulating ceiling cavity.

The house applies well established Australian thermal design principles by facing glazed aspects north, protecting from summer solar gain but inviting winter sun onto concrete floor thermal mass. In order to calibrate the solar benefits and to help minimise glare from the rising eastern sun the design process utilised digital thermal simulation to understand solar gain throughout the year. The ceiling concept organised the house through changes in height and connected domestic activities to particular vistas.

![Thermal Analysis](https://dl.dropboxusercontent.com/s/mblrwa7tdmr1030/MyolaSunlightAnalysis_LARGE.png?dl=0){:class="img-responsive"}

![Concept Diagram](https://dl.dropboxusercontent.com/s/8zwaz5z7tyoyxcv/Myolaviewconediagram_LARGE.png?dl=0){:class="img-responsive"}

The house layout organised around the thermally driven north/south aspect, and its relationship to the working farm. The house produces three types of thermal environment, along the south wet areas offer utility spaces for transitioning from farm to house, while the western bedrooms require greater insulation and separation from the rest of the house. In contrast, the main open plan living connects low-e glazing to north, south and eastern aspects and benefits from the thermal gain of everyday use.    

<!-- Panellum panorama -->
<div id="panorama"></div>

![Plan Drawing](https://dl.dropboxusercontent.com/s/tbk9k6tbwb0xzgh/MyolaPlan_LARGE.png?dl=0){:class="img-responsive"}
![Section Drawing](https://dl.dropboxusercontent.com/s/u6s5m9tdbplpmjb/MyolaSection_LARGE.png?dl=0){:class="img-responsive"}

The external appearance of the house developed through research into Cyprus pine's material propoerties, and a subsequent interest in the ancient Japanese technique of [Shou Sugi Ban](https://www.architecturaldigest.com/story/shou-sugi-ban-black-waterproof-wood-furniture). The treatment of vertically placed battens, all hand burnt by the client, added a unique black charred character to the house that contrasts with the red and green surroundings. Apart from providing a beautiful visual effect, the Cyprus pine charring adds waterproofing, increases termite resistance and protects from potential fire damage.

Myola existed as a full-service project within Supermanoeuvre, passing through all stages of sketch design, design development, construction documentation and contract administration working along side local consultants and an excellent builder.

![Timber Structure Model](https://dl.dropboxusercontent.com/s/h54sswzfl60zatn/MyolaStructure_LARGE.png?dl=0){:class="img-responsive"}

![Construction Photos](https://dl.dropboxusercontent.com/s/qrlupbnznbwzkob/MyolaConstruction_2_850x423.png?dl=0){:class="img-responsive"}

![Construction Photos](https://dl.dropboxusercontent.com/s/w587tvf9747ugyz/MyolaConstruction_850x423.png?dl=0){:class="img-responsive"}
<br>


<style>
#panorama {
    width: 700px;
    height: 350px;
}
</style>

<script>
    pannellum.viewer('panorama', {   
        "default": {
            "firstScene": "lounge",
            "sceneFadeDuration": 1000,
            "autoLoad": true
        },

        "scenes": {
            "lounge": {
                "title": "Living",
                "hfov": 110,
                "pitch": -1.81,
                "yaw": 21.87,
                "type": "equirectangular",
                "panorama": "https://dl.dropboxusercontent.com/s/sm7vffl7zzvwms7/Myola_Interior_LoungeVray_2000x100.png?dl=0",
                "hotSpots": [
                    {
                        "pitch": 0.69,
                        "yaw": -27.51,
                        "type": "scene",
                        "text": "Sleeping",
                        "sceneId": "bedroom"
                    }
                ]
            },

            "bedroom": {
                "title": "Sleeping",
                "hfov": 110,
                "yaw": 5,
                "type": "equirectangular",
                "panorama": "https://dl.dropboxusercontent.com/s/5w0xzik6plb0n76/Myola_Interior_LivingVray_2000x100.png?dl=0",
                "hotSpots": [
                    {
                        "pitch": -0.33,
                        "yaw": 71.59,
                        "type": "scene",
                        "text": "Living",
                        "sceneId": "lounge",
                        "targetYaw": -23,
                        "targetPitch": 2
                    }
                ]
            }
        }
    });
</script>