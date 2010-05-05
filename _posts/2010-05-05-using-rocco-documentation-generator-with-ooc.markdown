---
layout: post
title: Using The rocco Documentation Generator With ooc
---

Today I stumbled on a neat little literate-programming style documentation
generator called [docco](http://jashkenas.github.com/docco/). As you can see
in the example, it lines up comments with the associated source code in a very
stylish way. Naturally, the first thing I wanted to do was use this tool with
[ooc](http://ooc-lang.org)!

Docco is written in CoffeeScript, which I think is pretty cool, but today
wasn't the day for me to learn a new language. Luckily, I found a port of
docco to Ruby called [rocco](http://rtomayko.github.com/rocco/). Now, rocco and
docco both can only handle comments that have the same chars at the beginning
of every line. I wanted to use rocco for ooc with `/* */` comments, so I
[forked it](http://github.com/tsion/rocco) on GitHub and quickly hacked up some
code to handle `/* */` comments.

To have something worth running ooc-rocco on, I added some better documentation
to IRQ.ooc from [oos](http://github.com/tsion/oos). Check out the
[source](http://github.com/tsion/oos/blob/master/Src/Kernel/Hal/IRQ.ooc) and
the [results](http://junk.scott-olson.org/IRQ.html)!

Kudos to the writers of docco/rocco for making such a great little tool!
