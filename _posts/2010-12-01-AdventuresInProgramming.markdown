---
layout: post
title:  "Adventures In Programming Pt1"
date:   2010-12-01 12:00:00
categories: blog
tags: Creative Code
image:
---

Since learning the Processing language and buying Ableton Live I've been reading more and more about the ability to control computers through programming. This has spread to interests regarding my iphone and its ability to talk to my computer. This is where it all has become very complicated.

There are so many software packages and programming languages that do the same kind of things I have been trying to work out which ones I should devote some time to learning, as an assistance to others in my situation, here is a quick brain drain overview of what I have found.

[Processing](http://www.processing.org/) (Opensource) - images/animation/interaction

This language is based on javascript and is a good introduction to programming. It allows the creation of images, animation and interaction but it is generally not best used for sound design (see MAX_MSP/PureData/vvvv). Processing can use midi and osc communication for external control using specially created libraries (created by other very clever Processing users who distribute it for free). I have been learning Processing for a few months and my take so far is that it allows you to eventually (with enough experience) not rely on prescriptive software to achieve your aims but instead provide the freedom to use the power of the computer for more descriptive means.

In learning Processing the only problem I have found so far is its lack of compatibility with platforms that don't support flash or java applets. After researching Processing's usability in modern internet browsers (desktop, laptop and handheld) I found a project called [processing.js](ttp://processingjs.org/) which allows processing code to run on HTML5 using the canvas element (I still need to work out what this means myself).

[Wiring](http://www.wiring.org.co) (Opensource) - circuit boards / electronics / programming / prototyping

This is a direct descendent of Processing and it looks to connect the digital programming of Processing to the interactive and tangible media of the physical world. It originated in Italy and involves two types of input/output (i/o) boards which allow people to prototype electronic devices through the creation of circuit boards and then transfer Processing based programmes on to them.  The Wiring circuit boards are intended to be manipulated as a traditional circuit board, but then also be connected to a computer and programmed using the Wiring language (based on Processing). In my research I have never seen Wiring i/o boards sold commercially.

[Arduino](http://www.arduino.cc) (Opensouce) - circuit boards / electronics / programming / prototyping

Alternatively I have seen the arduino boards sold at many electronics shops and is itself based on the wiring programming language. Its immediate interest to me was that it can be used to create <a title="Midi definition" href="http://en.wikipedia.org/wiki/Musical_Instrument_Digital_Interface" target="_blank">midi</a> (music instrument digital interface) or <a title="OpenSoundControl" href="http://opensoundcontrol.org/" target="_blank">osc</a> (open sound control) based controllers for music or image based software. This concept sounds awesome, but there is the factor of the physical assemblage to also take into account.  My reading linked me to the <a title="Arduinome" href="http://flipmu.com/work/arduinome/" target="_blank">arduinomome</a> project which is a DIY clone of the <a title="Monome" href="http://monome.org/" target="_blank">nomome</a> which is a beautiful controller which can be linked to control Ableton Live. I would love to make one but I think I might damage myself as a result.

<a title="Ableton Live" href="http://www.ableton.com/" target="_blank">Ableton Live</a> (+Max for Live) - Music Production / Performance

I have and love Ableton Live, it gives me much to use and enjoy in making music which I was happy and generally baffled by, but then they brought out <a title="Max for Live" href="http://www.ableton.com/maxforlive" target="_blank">Max for Live</a>. Live itself is a great bit of software which allows me to make music, mix music, score music to video and DJ/perform live but the Max platform allows you to build your own parts of Live if you have <a title="Max/MSP" href="http://cycling74.com/" target="_blank">Max/MSP</a> know how (or alternatively if you are super techy and can understand the <a title="Live API" href="http://opensoundcontrol.org/implementation/liveapi-abelton-live" target="_blank">LiveAPI</a> you can hack Live, more on this later)

<a title="Max/MSP" href="http://cycling74.com/" target="_blank">Max/MSP</a> - all types of media

I first learnt about <a title="Max/MSP" href="http://cycling74.com/" target="_blank">Max/MSP</a> whilst studying architecture and I was intrigued by my lecturer's passion for its ability to control pretty much everything (yes it can do sound and images). Soon after I realised I wasn't going to obtain it for free, and while I don't think this is a bad thing at that point it really wasn't an option, after many attempts to find cracked copies I decided to look at other options. Throughout my research I am realising that this really is a great programming platform as it can be quick and relatively easy (I have been told) to produce whatever you imagine without knowing any programming language. This programming method is very similar to <a title="Puredata" href="http://puredata.info/" target="_blank">puredata</a>  (which is an open source version created by the max/msp inventor and <a title="Quartz Composer" href="http://en.wikipedia.org/wiki/Quartz_Composer" target="_blank">quartz composer</a>.

Part 2 of my knowledge quest soon........
