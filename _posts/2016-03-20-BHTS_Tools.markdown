---
layout: bhts_post
title:  "Tools of personal fabrication"
date:   2016-03-20 12:00:00
categories: bhts
tags: software, additive, subtractive, electronic_prototyping
image: https://dl.dropboxusercontent.com/u/20394991/MakingCulture/Tools_Autodesk_ArtistInResidence.png
---
The Making Culture project was proposed on the observation that digital fabrication tools were becoming more affordable in society, and they therefore would start to have an influence on society. This section will explain what these tools are and what they can achieve in the hands of a novice.

# Software
CAD (Computer Aided Design) software provides the vital link between having ideas and realising them through digital fabrication machines. Computers  cannot design their own forms (yet) but do communicate with fabrication machines using specific code languages. Equally fabrication machines cannot simply manipulate materials without clear production instructions, this is where CAD comes in.

In the 2D domain there are two types of software, those that manipulate lines (vector) and pixels (raster).  For use in digital fabrication a vector line is of most use as it provides information about paths, and therefore can be used to guide a CNC router or laser axis. 2D methods are useful when making is through a process of layering, such as contouring or rib modelling.

Some CAD packages can also compute and visualise 3d objects which provide different workflows and techniques for generating form. Broadly they can be split into professional and consumer packages based on complexity and capability but free student copies and trial licences (and cracks) mean that there is considerable cross over. Overall there are two 3d modelling paradigms that exist, software that utilise NURBS (Non Uniform Rational B-Splines), and those that manipulate Polygon Meshes.

Once virtual 3d form has been created it must be translated into an understandable set of instructions for fabrication machines. While some industrial design software have this built in it is generally the role of CAM (Computer Aided Manufacturing) software. The file format a machine understands depends largely on the open or closed attitude of the machine maker. Within an open culture generally CNC routers and laser cutters work via DXF files for 2D or gcode for 3D.

In 3d printing the general format is STL but as competition has increased in consumer printers some companies have sought to create proprietary formats that rely on bespoke software to interpret this initial STL file. Those with sense have realised that moving the opposite way and using an open and consistent file format means that there is transferability with designs.

There are a few types of software which connect the two worlds of CAD and CAM. Programmes like Solidworks or Fusion 360 provide direct file to factory translations and go as far as to simulate how your design can be made through different manufacturing processes. Whereas 3D modelling allow you to just design, these software packages allow testing and fabrication to be simulated reducing wastage of materials in unnecessary prototypes.

These packages have been created for the professional designer in mind, however there are similar but simplified packages marketed to the amateur and in particular school children. Autodesk’s free 123D suite of desktop and mobile device apps is integrated with content and fabrication services and provides an entry into 3d modelling and fabrication.

The exciting aspect of software and its continual innovation is that what currently seems like complex software that only professionals use will soon be the norm for the generation brought up with these at their disposal.

For a full list of software see
www.3ders.org/3d-software/3d-software-list

![Adelaide Fab Lab Laser Cutter](https://dl.dropboxusercontent.com/u/20394991/MakingCulture/Tools_Lasercutter.png)

#Subtractive Fabrication
Machining processes that remove material come under the category of subtractive fabrication with variation in the method of removal. Subtractive as the name suggests creates waste and therefore should be chosen in relation to the materials being manipulated and desired quality of output.

Laser cutters use a focused laser beam to burn away from sheet material and can be used on anything non flammable of thickness relating to the power of the laser. My experience was that the laser cutter was the workhorse of the maker space and generally the tool that generated the highest amount of interaction. As David Byworth of Adelaide Fab Lab put it, “the laser cutter is the water cooler of fabrication tools” where everyone gathers to talk about projects.

A laser cutter has two axis’s (x,y) and two simple modes, burn partially, which can create score marks, and burn fully which cuts all the way through. Creative output is generally of three types, flat sheet patterns, planar constructions, or layered form. The tool is popular for cutting out templates of parts to then combine and produce form.

If makers want to deal with larger, harder or thicker sheets of material, or want 3D shapes formed then they must use a Computer Numerically Controlled (CNC) Router. Simply put this is a drill bit that rapidly revolves to remove material. What separates it from laser cutting is that the depth of material removal can be controlled. Most CNC routers are 3-axis with x (left right), y (forwards backwards) and z (up down) directions, with flat beds that come is different sizes. In my study the most popular router was the Shopbot which comes in sizes ranging from a desktop machine (cutting volume of 0.6m x 0.4m x 0.08m) to manufacturing scale machines (3.66m x 1.52m x .15m).

Some spaces employing advanced manufacturing techniques contained CNC routers with 5-axis, the two extra being  a rotation around the x-axis (the A-axis) and around the y-axis (the B-axis). As CNC routers can manipulate large and hard material they are ideal for producing large elements for projects  or very detailed surface treatments. They can also assist in other making techniques such as vacuum forming or cast moulding.

The dirty cousins of the laser cutter, and CNC router are the water jet cutter and plasma cutter. The former uses high pressure jets of water with mixed abrasive to cut extremely hard materials that are sensitive to high temperatures. The latter uses heat through a localised blow torch to remove sheet metal.

The above provide examples of fabrication processes that have transferred from the factory into the maker space. The Vinyl cutter on the other hand comes from the automation of more craft based techniques. In the maker space the vinyl cutter offers an entry point into CNC control and is popular for cutting patterns in fabric and creating vinyl sticker decals.

![For Labs SLA Printing](https://dl.dropboxusercontent.com/u/20394991/MakingCulture/Tools_Form_1_SLA.png)

#Additive Fabrication
The industrial revolution and its associated manufacturing machinery relied on subtractive processes, milling, machining, lathing, to create objects for mass production. The 3D printer has created a paradigm shift in making as it allows material to be gradually added in three dimensions and reduces material waste.

At its basic level 3d printing is a deposition of material in three axis, x and y for a layer of material, and z to build layers. There are different ways that machines achieve this 3-axis maneuverability and how material is deposited, but ultimately the outcome is a facsimile of a 3d model created in a CAD package.

3d printers differ in the material they process, and the way print heads are directed to deposit material. With each there is an associated difference in technological advancement and as a result, price.

In the maker spaces I visited, all had fused deposition modeling (FDM) machines which are the types that have  come down in price enough to enter the consumer market. Within this category there are two types of printing mechanism, the flat bed which mimics the inkjet x,y axis’s but with a z direction, and the delta printer which uses a hung set of arms that triangulate to print in space.

There are approximately 240 different types of FDM 3d printer available in the consumer market with varied quality. Experience from my visits showed that there seemed to be a few trusted brands, which either by reputation or sponsorship, seemed to repeat everywhere I went. These printers were the UP Plus, Makerbot, Ultimaker, Printrbot and Dremel. All of these can layer up thermoplastic filament, either PLA of ABS, but in some cases could also print wood or metal based filaments.

A step up in the technology stakes brings makers to the process of Vat Photopolymerisation which produces solid 3d form by accurate activation of liquid material. Within this process there are printers that use Stereolithography (SLA) to transform liquid ultraviolet curable photopolymer resin into solid using an ultraviolet laser, and Continuous Liquid Interface Production (CLIP) that uses changing pulses of UV light and oxygen for a faster build.

These printers are currently entering the consumer market and large companies such as Autodesk have invested in the technology, in addition to start ups such as Form Labs, Kudo 3D and FSL3D. Innovation potential lies in the liquids employed to print and bio hacking labs such as biocurious are exploring printing with living material.

At the high end of 3D printing spectrum are machines that use binder jetting or powder bed fusion technology to either glue or melt small particles of material with a laser. These two processes produce the highest quality and are currently only accessible through 3d printing services such as Shapeways or Sculpteo.

What all of these processes and associated technologies share is that they generally have a limited volume in which to print. As a result they are mostly employed to create discrete objects associated with product design, but this is changing. At Makercon a larger printer called Gigabot was showcased capable of printing within a 2.1 cubic metre space. This changes the scalar capacity of 3d printers and makes it useful to produce larger building components.

![Canal House 3D printed building fragment.](https://dl.dropboxusercontent.com/u/20394991/MakingCulture/Tools_canalhouse_fragment.png)

I visited an example of this at the Dutch Design exhibition showing at the San Francisco Museum of Craft and Design. A 3d printed fragment of a house project by Dus Architects shows what a construction utilising this technology could look like. Dus worked with Ultimaker to upscale their desktop printer into one called a Kamermaker capable of very large bioplastic printing. Their ambition is to eventually allow potential clients of new house projects to customize open designs online, before having them fabricated and assembled on site.

If the Kamermaker is the large scale version of the standard desktop 3d printer, then 3d printing robotic arms using direct energy deposition represent the scaled up version of the delta printer type. Projects by Gramazio & Kohler provide examples where robotic arms are used to deposit material from a nozzle in situ. Recently this deposition has been pushed further by research such as the Stonespray project that are redefining the method that 3d printed material is deposited.

![Raspberry Pi Micro Computer Robots](https://dl.dropboxusercontent.com/u/20394991/MakingCulture/Tools_RaspberryPi.jpg)

#Digital Prototyping
Although not technically a fabricating tool, electronic prototyping is having the same democratising effect on electronics and allows amateurs to create their own complex systems from affordable kits of parts. They are an extremely popular aspect of maker culture and have their own specific communities.

Products like the Arduino, provide low cost physical computing platforms based on a simple micro-controller board, and in Arduino’s case a devoted development environment for writing software for the board.

Arduino was introduced in 2005 as micro controllers became small and affordable enough to enter the consumer market. Micro controllers were previously the domain of professional engineers but are now accessible by artists, designers and home project hobbyists. At the same time the size and cost of sensors has reduced dramatically opening up the possibilities of collecting and transmitting data and connecting virtual and physical environments.

In addition to Arduino, which is a micro controller working via uploaded code instructions, there are now micro computers such as Raspberry Pi, Beagle Bone and the Intel Edisson which need their own operating software.

Within the maker spaces I visited DIY smart devices were one of the most popular projects users were engaged in. At one end of the technical scale projects utilised sensors and connectivity to send messages to phones, or automate home processes. At the other end, and in particular for young people, there are prototyping platforms that can provide automation simply through different module combinations.

Platforms such as Little Bits and Sony’s Mesh allow quick inventions to be prototyped via connected inputs (buttons, switches, and sensors) and outputs (motion, light, sound and data signals). The SETC Fab Lab and Hatch maker space had invested in this platform and used their capabilities to construct personal stories around kinetic models.

These prototyping software machines provide local processing of data supplemented by connectivity to the internet allowing systems to communicate with one another. The resulting “Internet Of Things” promises connectivity of anything in the world which can send, process and receive data. Objects designed for specific purposes can become “smart objects” as they receive information about their environment, or data related to their function collected by other networked objects.

![Intel and Native Instruments partnership](https://dl.dropboxusercontent.com/u/20394991/MakingCulture/Tools_Intel_NativeInstruments.png)
