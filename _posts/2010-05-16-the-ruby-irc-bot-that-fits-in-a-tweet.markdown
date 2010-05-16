---
layout: post
title: The Ruby IRC Bot That Fits in a Tweet
---

This is the result of a long late-night hacking session with
[duckinator](http://duckinator.net): An IRC bot, written in Ruby, that fits in
a [tweet](http://twitter.com/tsion/status/14086779076) (140 chars).

Here is the source code:

{% highlight ruby %}
require'socket'
a,p,c=$*
$>=TCPSocket.new a,p
puts"USER "*5,"NICK w"
$>.each{|l|puts case l
when/(P.+)-/
$1+$'
when/PI/
"PO#$'JOIN "+c
end}
{% endhighlight %}

And here it is with semicolons instead of newlines:

{% highlight ruby %}
require'socket';a,p,c=$*;$>=TCPSocket.new a,p;puts"USER "*5,"NICK w";$>.each{|l|puts case l;when/(P.+)-/;$1+$';when/PI/;"PO#$'JOIN "+c;end}
{% endhighlight %}
