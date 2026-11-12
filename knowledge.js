/* TORRNAMA v3 — educational reference authored in Sorani Kurdish and English.
   Educational simplifications are labeled. Not a packet capture. */
(function(){
const B=(ku,en)=>({ckb:ku,en});
const K=(id,icon,titleKu,titleEn,shortKu,shortEn,ku,en)=>({id,icon,title:B(titleKu,titleEn),short:B(shortKu,shortEn),sections:B(ku,en)});
window.TORRNAMA_KNOWLEDGE=[
K('what-is-network','◈','تۆڕ چییە؟','What is a network?','بنەمای پەیوەندی نێوان ئامێرەکان','How devices connect and share data',[
'تۆڕ بریتییە لە پەیوەستکردنی دوو یان زیاتر ئامێر بۆ ئاڵوگۆڕی زانیاری. ئەم ئامێرانە دەتوانن کۆمپیوتەر، مۆبایل، چاپکەر، ڕاوتەر یان سێرڤەر بن. پەیوەندییەکە دەتوانێت بە کێبڵ یان بەبێ کێبڵ بێت.',
'کاتێک داتایەک لە ئامێرێکەوە بۆ ئامێرێکی تر دەڕوات، زۆرجار دەبێتە پارچەی بچووک و بە پەیام و پاکێت دەنێردرێت. هەر پارچەیەک زانیاری وەک ناونیشانی نێرەر و وەرگر هەڵدەگرێت.',
'LAN تۆڕی سنووردارە وەک ماڵ یان قوتابخانە؛ WAN تۆڕێکی فراوانترە کە شوێنە دوورەکان پەیوەست دەکات. ئینتەرنێت تۆڕێکی گەورەی تۆڕە پەیوەستەکانە.' ],[
'A network connects two or more devices so they can share information and resources. Devices include computers, phones, printers, routers, and servers, connected through cables or wireless links.',
'Data moves as messages and packets. These pieces carry information used for delivery, such as source and destination addresses. Multiple technologies cooperate to send data.',
'A LAN covers a limited area such as a home or school. A WAN spans larger areas. The Internet connects many separate networks into one worldwide system.']),
K('osi','⑦','حەوت چینی OSI','The seven OSI layers','بۆچی تۆڕ بە چین دابەش دەکرێت؟','Why networking is organized into layers',[
'مۆدێلی OSI شێوازێکی فێرکارییە بۆ تێگەیشتن لە پەیوەندیکردنی تۆڕ. حەوت چینی هەیە: Physical، Data Link، Network، Transport، Session، Presentation، Application.',
'چینی ١ سیگناڵ و کێبڵ دەگرێتەوە؛ ٢ فریم و MAC؛ ٣ ناونیشانی IP و ڕاوتینگ؛ ٤ گواستنەوەی دڵنیا یان خێرا وەک TCP/UDP؛ ٥ دانیشتن؛ ٦ شێوازی داتا و پێشکەشکردن؛ ٧ خزمەتگوزاری بەرنامەکان وەک HTTP و DNS.',
'OSI خۆی پرۆتۆکۆلێک نییە و بە واتای ئەوە نییە هەموو پەیوەندییەکی ڕاستەقینە بە حەوت بەشی جیا کاری دەکات. بۆ فێربوون، هەر چینێک ئەرکێکی دیاریکراو دەردەخات.' ],[
'The OSI model is a conceptual seven-layer reference for understanding networks: Physical, Data Link, Network, Transport, Session, Presentation, and Application.',
'Layer 1 is signals and media; 2 frames and MAC addresses; 3 IP and routing; 4 transport such as TCP or UDP; 5 sessions; 6 data representation; 7 application services such as HTTP and DNS.',
'OSI is a learning model, not a single protocol. Actual Internet implementations do not always map neatly to seven distinct software components.']),
K('tcpip','⇄','مۆدێلی TCP/IP','The TCP/IP model','چینە کاراییەکانی ئینتەرنێت','Practical layers used by the Internet',[
'مۆدێلی TCP/IP زۆرجار بە چوار چین پیشان دەدرێت: Link، Internet، Transport و Application. ئەم مۆدێلە بۆ باسکردنی پەیوەندی ڕاستەقینەی ئینتەرنێت زۆر بەکاردێت.',
'لەپێناوی ناردنی پەیامی HTTP، چینی Application داواکاری دروست دەکات، TCP یان QUIC گواستنەوەی دەباتە ئەستۆ، IP ناونیشان دەدات، و چینی Link داتاکە لەسەر پەیوەندی ناوخۆ دەگوازێتەوە.',
'Encapsulation واتە هەر چینێک زانیاری تایبەتی خۆی لەگەڵ داتا دەخات؛ لە وەرگرتندا سەرپەڕەکان بە پێچەوانە لادەبرێن.' ],[
'The TCP/IP model is commonly shown as Link, Internet, Transport and Application layers. It maps more directly to how the Internet is built.',
'An HTTP request starts at the application layer. TCP or QUIC handles transport, IP supports addressing across networks, and the link layer moves data across a local medium.',
'Encapsulation means adding layer-specific headers as information moves down the stack; a receiver interprets these layers in the other direction.']),
K('addresses','⌘','IP و MAC Address','IP and MAC addresses','ناونیشانی ئامێر و ناونیشانی تۆڕ','Device identity and network addressing',[
'ناونیشانی IP بۆ ناسینەوەی ئامێر لە تۆڕێکی IP بەکاردێت. IPv4 بە ٣٢ بیت و IPv6 بە ١٢٨ بیت دروست دەبێت. ناونیشانی وەک 192.168.1.10 زۆرجار تایبەتی تۆڕی ناوخۆیە.',
'MAC Address ناونیشانی چینی Data Link ـە و لە پەیوەندی ناوخۆدا بەکاردێت. IP و MAC یەک شت نین؛ IP یارمەتی ڕێنیشاندان لە نێوان تۆڕەکان دەدات، MAC بۆ گەیاندنی فریم لە لینکێکدا بەکاردێت.',
'ناونیشانی 203.0.113.10 لە هێڵکارییەکاندا نموونەی فێرکارییە، نەک ئادرەسی سێرڤەرێک کە ئێمە لە ماڵپەڕدا پەیوەندیی پێوە دەکەین.' ],[
'IP addresses identify network interfaces in an IP system. IPv4 uses 32-bit addresses and IPv6 uses 128-bit addresses. Addresses such as 192.168.1.10 are commonly used privately.',
'A MAC address is a link-layer identifier. IP addresses are used for forwarding between networks; MAC addresses are used for delivery on an individual link.',
'Example address 203.0.113.10 in our educational diagrams belongs to documentation space. It is not the live endpoint of this website.']),
K('dns','◎','DNS چۆن کار دەکات؟','How DNS works','گۆڕینی ناوی دۆمەین بۆ IP','Turning names into IP addresses',[
'بەکارهێنەر ناوی وێبسایت دەنووسێت، بەڵام بۆ پەیوەندیی زۆربەی خزمەتگوزارییەکان پێویستە ناونیشانی IP دیاری بکرێت. DNS یارمەتی دۆزینەوەی تۆماری گونجاو دەدات.',
'Resolver سەرەتا لە وەڵامی هەڵگیراو (Cache) دەگەڕێت؛ ئەگەر پێویست بوو لە سێرڤەرەکانی DNS پرسیار دەکات. A بۆ IPv4، AAAA بۆ IPv6، MX بۆ گەیاندنی ئیمەیڵ، CNAME بۆ ناوی جێگرەوەیە.',
'TTL ماوەی مانەوەی وەڵامی DNS لە Cache دەستنیشان دەکات. API ـی گووگڵ لەم پڕۆژەیەدا داواکاری DNS-over-HTTPS دەکات؛ هێڵکارییەکە لەسەر شێوازی گشتیی DNS ـە و پاکێتی ڕاستەقینە نییە.' ],[
'DNS looks up records associated with a domain name. A browser often needs an IP address before it can contact a service.',
'A resolver may answer from cache or contact other DNS servers. A records refer to IPv4, AAAA to IPv6, MX to mail routing, and CNAME to aliases.',
'TTL controls how long records may be cached. The live Google DNS feature here uses DNS over HTTPS; our arrows illustrate the concept and do not display captured packets.']),
K('routing','◇','ڕاوتەر و ڕێنیشاندان','Routers and routing','چۆن پاکێت ڕێگای خۆی دەدۆزێتەوە؟','How a packet finds its path',[
'ڕاوتەر دوو یان زیاتر تۆڕ پەیوەست دەکات و بەپێی خشتەی ڕێنیشاندان هەنگاوی داهاتووی پاکێت هەڵدەبژێرێت. هەر پاکێتێک دەکرێت بە ڕێگایەکی جیاواز بڕوات.',
'Default Gateway ئەو ڕاوتەرەیە کە ئامێری ناوخۆ زۆرجار پاکێتەکانی بۆ دەڕوات، کاتێک مەبەست لە هەمان تۆڕدا نییە.',
'لە ئینتەرنێتدا ڕێنیشاندان بە چەندین ڕاوتەر و ڕێسای ڕێنیشاندان جێبەجێ دەکرێت؛ بۆیە هێڵی ڕاستی نێوان دوو ئامێر تەنها نمایشی فێرکارییە.' ],[
'Routers connect networks and consult routing tables to decide where to forward IP packets. Paths can change with network conditions and policy.',
'A default gateway is the router a device typically uses when the destination is outside its local subnet.',
'Real paths contain multiple hops. The straight arrows in this learning tool simplify that path; they do not reveal the real Internet route.']),
K('tcp','↔','TCP و دەستگرتنی سێ قۆناغی','TCP and the three-way handshake','چۆن پەیوەندییەکی دڵنیا دەست پێ دەکات؟','Why TCP is reliable',[
'TCP پرۆتۆکۆلێکی گواستنەوەی پەیوەندی-پێویستە؛ ژمارەی ڕیز، پشتڕاستکردنەوە و دووبارە ناردنەوەی پارچە ونبووەکان بەکاردەهێنێت بۆ گواستنەوەی ڕیزبەندی دڵنیا.',
'دەستگرتنی ناسراو سێ هەنگاوە: SYN لە کڕیارەوە، SYN-ACK لە سێرڤەرەوە، و ACK لە کڕیارەوە. ئەمە پەیوەندی دامەزرێنێت؛ دواتر داتا دەگوازرێتەوە.',
'ACK واتە وەرگرتنی داتا پشتڕاست دەکرێتەوە. TCP هەموو جۆرە دواکەوتن و هەڵەیەک لە ئینتەرنێتدا نەهێنێتە کۆتایی، بەڵام ئامرازەکانی چاککردنەوەی هەیە.' ],[
'TCP is a connection-oriented transport. It provides ordered, reliable byte delivery using sequence numbers, acknowledgments, retransmissions and flow control.',
'The classic three-way handshake is SYN, SYN-ACK and ACK. It establishes state between the endpoints before application data is exchanged.',
'An ACK signals receipt of particular bytes. TCP cannot prevent every delay, but it can recover from many packet losses.']),
K('udp','➤','UDP چی جیاوازییەکی هەیە؟','UDP explained','گواستنەوەی سادە و بەبێ پەیوەندی','Lightweight connectionless transport',[
'UDP سەرپەڕێکی بچووکی هەیە و بێ پەیوەندییە؛ وەک TCP خۆی مسۆگەری نادات پەیام بە ڕیز یان بە تەواوی بگات.',
'بۆ پەیوەندییە خێراکان، هەندێک یاری، دەنگ و ڤیدیۆ، DNS و QUIC بەکاردێت. ئەمە مانای ئەوە نییە UDP هەمیشە خێراترە؛ ئەنجام بە بەرنامە و تۆڕەکە دەگۆڕێت.',
'ئەگەر بەرنامە پێویستی بە پشتڕاستکردنەوە یان دووبارە ناردنەوە هەبێت، دەتوانێت خۆی بەشی ئەو کارانە جێبەجێ بکات.' ],[
'UDP is a connectionless transport with a small header. It does not itself promise delivery, order or retransmission.',
'It is useful for DNS, real-time applications, and as a foundation for QUIC. Whether it is faster depends on the application and path.',
'Applications can implement their own reliability or congestion control mechanisms when they need them.']),
K('http','↗','HTTP، داواکاری و وەڵام','HTTP requests and responses','GET، POST، Status و Header','Methods, headers and status codes',[
'HTTP شێوازێکی داواکاری و وەڵامە: Client داواکارییەک دەدات و Server وەڵام دەگەڕێنێتەوە. داواکاری دەتوانێت Method و URL و Header و ناوەڕۆکی هەبێت.',
'GET زۆرجار بۆ خوێندنەوەی زانیاری بەکاردێت؛ POST بۆ ناردنی داتا؛ PUT بۆ جێگرتنەوەی سەرچاوە؛ DELETE بۆ سڕینەوە. کۆدەکان: 200 سەرکەوتوو، 301 گواستنەوە، 404 نەدۆزرایەوە، 500 هەڵەی سێرڤەر.',
'لە HTTP/1.1 دا زۆرجار TCP بەکاردێت، بەڵام HTTP/3 لەسەر QUIC کار دەکات. لە تاقیگەکەمان JSONPlaceholder وەڵامی فێرکاریی JSON دەگەڕێنێتەوە.' ],[
'HTTP is a request/response protocol. A client sends a method, URL, headers, and optionally a body; a server returns a status code, headers, and response body.',
'GET commonly reads data; POST submits data; PUT replaces resources; DELETE requests deletion. Typical statuses include 200 OK, 301 redirect, 404 not found and 500 server error.',
'HTTP/1.1 commonly runs over TCP, while HTTP/3 uses QUIC. Our live lab uses JSONPlaceholder as a public practice endpoint.']),
K('https','▣','HTTPS و TLS','HTTPS and TLS','پاراستنی داتا لە ڕێگادا','Transport encryption, certificates and trust',[
'HTTPS واتە HTTP لەسەر پەیوەندی پارێزراو. TLS داتا لە کاتی گواستنەوەدا نهێنی دەکات، و یارمەتی سەلماندنی ناسنامەی سێرڤەر دەدات.',
'وێبگەڕ بڕوانامە (Certificate) دەپشکنێت و کلیلی پەیوەندی پارێزراو ڕێکدەخات. بەو شێوەیە کەسانی نێوان ڕێگا ناتوانن بە ئاسانی ناوەڕۆکی پەیام بخوێننەوە.',
'بوونی HTTPS بە تەنها واتە ماڵپەڕەکە متمانەپێکراوە نییە؛ تەنها پەیوەندی پارێزراوە. لەم سیموڵەیشنەدا وشەکانی Handshake پێشاندەدرێن، نەک کلیلی نهێنیی ڕاستەقینە.' ],[
'HTTPS uses HTTP over a protected connection. TLS encrypts traffic in transit and helps authenticate a server.',
'The browser validates the server certificate and negotiates keys. This reduces opportunities for intermediaries to read or change the application data.',
'HTTPS alone does not mean a site is safe or honest. Our visualizer explains the handshake but does not access real secret keys.']),
K('ports','⌁','پۆرت و Socket','Ports and sockets','بۆچی 80، 443 و 53 گرنگن؟','How services are addressed',[
'پۆرت ژمارەیەکە کە یارمەتی سیستەمی کارپێکردن دەدات بزانێت داتایەک بۆ کام خزمەتگوزاری یان بەرنامەیە. IP ئامێرەکە دەدۆزێتەوە، پۆرت خزمەتگوزارییەکە دیاری دەکات.',
'نموونەی ناسراو: HTTP پۆرتی 80، HTTPS 443، DNS زۆرجار 53، SSH 22. ژمارەی پۆرت بە تەنها پاراستنی پەیوەندی یان کارکردنی خزمەتگوزاری مسۆگەر ناکات.',
'Socket زۆرجار بە IP و پۆرت و پرۆتۆکۆلی گواستنەوە پێناسە دەکرێت. پۆرتی کڕیار دەتوانێت کاتی (ephemeral) بێت، وەک 52344.' ],[
'A port helps an operating system deliver network data to the correct service or application. IP identifies an endpoint; the port distinguishes services on it.',
'Familiar examples include HTTP 80, HTTPS 443, DNS 53, and SSH 22. A port number alone does not imply a service is reachable or secure.',
'Sockets are often identified by address, transport protocol and port. Client source ports are often temporary (ephemeral).']),
K('dhcp','⊕','DHCP و وەرگرتنی IP','DHCP and address assignment','ئامێر چۆن IP دەدۆزێتەوە؟','How a device gets an address',[
'DHCP دەتوانێت IP، Subnet Mask، Default Gateway و ناونیشانی DNS بۆ ئامێرێک دابین بکات. لە تۆڕی ماڵدا زۆرجار ڕاوتەر خزمەتگوزاری DHCP پێشکەش دەکات.',
'بۆ IPv4 یەک شێوازی ناسراو بریتییە لە Discover، Offer، Request، Acknowledge. ئەمانە زۆرجار بە DORA ناودەبرێن.',
'ناونیشانەکە بە شێوەی Lease بۆ ماوەیەکی دیاریکراو پێدەدرێت، و دەتوانێت نوێ بکرێتەوە. هەموو تۆڕێک DHCP بەکارناهێنێت؛ IP دەتوانێت بە دەستی دیاری بکرێت.' ],[
'DHCP can provide an IP address, subnet mask, default gateway, and DNS settings. Home routers commonly run a DHCP service.',
'A typical IPv4 sequence is Discover, Offer, Request, Acknowledge (DORA).',
'Addresses are generally leased and can be renewed. Some networks use static addressing instead.']),
K('nat','⧉','NAT چییە؟','Understanding NAT','بەشکردنی IP ـی گشتی لە نێوان ئامێرەکان','Private and public address translation',[
'NAT دەتوانێت ناونیشانی تۆڕی ناوخۆ بگۆڕێت بە ناونیشانی تۆڕی دەرەکی. لە ماڵدا زۆرجار چەند ئامێر بە یەک IP ـی گشتی ئینتەرنێت بەکاردەهێنن.',
'ڕاوتەر بەپێی پەیوەندییەکان و زۆرجار پۆرتەکان تۆمارێک دەپارێزێت بۆ ئەوەی وەڵامی گەڕاوە بگاتە ئامێری دروست.',
'NAT خۆی Firewall یان Encryption نییە. لە IPv6 دا بەهۆی فراوانی ناونیشانەکانەوە پێویستی بە ئەم شێوازە کەمترە.' ],[
'NAT translates addresses across network boundaries. Home networks often let multiple private devices share one public IPv4 address.',
'The router tracks translations, often using port numbers, so returning traffic can reach the correct device.',
'NAT is not the same as encryption or a security firewall. With IPv6, address translation is less necessary.']),
K('arp','⤳','ARP چییە؟','Address Resolution Protocol','دۆزینەوەی MAC لە IPv4','Finding local MAC addresses',[
'کاتێک ئامێرێک لە تۆڕی ناوخۆدا ناونیشانی IPv4 ـی وەرگر دەزانێت، دەکرێت پێویستی بە MAC ـەکەی هەبێت بۆ ناردنی فریم لەسەر Ethernet.',
'ARP Request دەپرسی «کێ ئەم IP ـەی هەیە؟» و خاوەن ناونیشانەکە ARP Reply دەنێرێت.',
'ARP بۆ IPv4 بەکاردێت. لە IPv6 دا Neighbor Discovery (ND) ئەرکی هاوشێوە جێبەجێ دەکات.' ],[
'On an IPv4 local network, a device may need to learn the MAC address associated with a local IP before sending an Ethernet frame.',
'An ARP request asks who owns an IP address, and an ARP reply supplies the MAC address.',
'IPv6 uses Neighbor Discovery rather than ARP.']),
K('firewalls','▤','Firewall و پاراستنی تۆڕ','Firewalls and network safety','ڕێگەدان و ڕێگرتن لە پەیوەندی','Filtering traffic safely',[
'Firewall بەپێی ڕێساکان بڕیار دەدات چی لە پەیوەندییەکان ڕێگەپێدراو بێت. دەتوانێت IP، پۆرت، پرۆتۆکۆل یان دۆخی پەیوەندی بپشکنێت.',
'Firewall ڕێگری لە هەموو کێشەیەکی ئەمنی ناکات؛ نوێکردنەوەی سیستەم، وشەی نهێنیی بەهێز و HTTPS ـیش گرنگن.',
'لە تۆڕدا بۆ تاقیکردنەوەی فێرکاری، باشترە لە ئامێر و خزمەتگوزاریی خۆت کار بکەیت و ڕێز لە مۆڵەتی خاوەن تۆڕ بگریت.' ],[
'A firewall filters traffic according to rules involving addresses, ports, protocols, and connection state.',
'Firewalls do not solve every security issue. Updates, strong authentication, and encrypted connections remain important.',
'Practice on networks and services you own or are authorized to use.']),
K('subnets','⊞','Subnet و CIDR','Subnets and CIDR','چۆن ناونیشانەکان دابەش دەکرێن؟','Dividing an IP network',[
'Subnet بەشێکە لە تۆڕی IP کە بە پێشگری ناونیشان دیاری دەکرێت. نموونە: 192.168.1.0/24 واتە ٢٤ بیتی یەکەم بۆ بەشی تۆڕ دیاری کراوە.',
'لە IPv4 /24 ـی باو، ٢٥٦ ناونیشانی گشتی لەو بڵۆکەدا هەیە؛ لە تۆڕی ئاساییدا بە گشتی ٢٥٤ ناونیشانی بەکارهێنانی ئامێر دەتوانرێت هەبێت.',
'ڕاوتەر لە Prefix بۆ دیاریکردنی ئەوە بەکاردەهێنێت کام ناونیشان لە کام تۆڕدایە. CIDR ڕێگایەکی گشتیی نووسینی پێشگرەکانە.' ],[
'A subnet divides an IP address space using a prefix. For example, 192.168.1.0/24 reserves the first 24 bits for the network prefix.',
'A typical IPv4 /24 contains 256 addresses, of which 254 are traditionally usable hosts in an ordinary broadcast subnet.',
'CIDR notation represents flexible prefix lengths; routers use network prefixes to select routes.']),
K('api','{}','API چییە و چۆن کار دەکات؟','How APIs work','Fetch، JSON، Endpoint و CORS','Fetch, JSON, endpoints and CORS',[
'API ڕێگەیەکی ڕێکخراوە کە بەرنامەیەک بە بەرنامەیەکی تر داواکاری بدات. Endpoint ناونیشانی دیاریکراوی خزمەتگوزارییە. زۆر API داتا بە JSON دەگەڕێننەوە.',
'لە JavaScript دا fetch(url) داواکاری HTTP دەنێرێت. دواتر response.ok و response.status دەپشکنین و response.json() داتا دەخوێنێتەوە.',
'CORS ڕێسای پاراستنی وێبگەڕە بۆ داواکاریی ناوچەی جیاواز؛ ئەگەر سێرڤەر ڕێگە نەدات، داواکاری لە Browser سەرناکەوێت. تۆڕنما Google Public DNS API و JSONPlaceholder بە شێوەی ڕاستەقینە بەکاردەهێنێت، بەڵام پاکێتەکان تەنها نمایشی فێرکارین.' ],[
'An API is an interface for one program to request data or services from another. An endpoint is a service URL. JSON is a common response format.',
'JavaScript fetch(url) makes a web request. We should check response.ok or status and parse JSON using response.json().',
'CORS controls which cross-origin requests browsers can read. TORRNAMA uses Google Public DNS and JSONPlaceholder for real API requests, while animation remains illustrative.']),
K('network-troubleshooting','⌕','چارەسەرکردنی کێشەکانی تۆڕ','Network troubleshooting','لێکدانەوەی کێشەکان بە ڕیز','A systematic way to debug connectivity',[
'سەرەتا دڵنیا بە ئامێرەکەت پەیوەندی Wi-Fi یان کێبڵی هەیە و IP ـی دروستی وەرگرتووە. پاشان سەیری Default Gateway بکە.',
'ئەگەر ناوی ماڵپەڕ کار ناکات بەڵام IP ـەکە کار دەکات، لەوانەیە کێشە لە DNS بێت. ئەگەر هیچ سایتێک کار ناکات، پەیوەندی، ڕاوتەر، دابینکەر و Firewall بپشکنە.',
'لە Developer Tools ـی Chrome، بەشی Network داواکاری و وەڵامەکانی HTTP دەردەخات؛ ئەمە هەمان شت نییە بە پێوانەکردنی هەموو پاکێتەکانی تۆڕ. تاقیکردنەوەی ڕێگەپێدراو و تێبینییەکان بەردەوام تۆمار بکە.' ],[
'First check the device’s Wi-Fi or wired connection, assigned IP address and default gateway.',
'If an IP works but a domain name does not, DNS may be the issue. If no websites load, check connectivity, the router, the provider, and firewall rules.',
'Chrome DevTools Network shows HTTP-related requests, not a full packet capture. Document observations and test only systems you are authorized to use.']),
K('client-server','▥','Client و Server','Clients and servers','کێ داوا دەکات و کێ وەڵام دەداتەوە؟','The request-response relationship',[
'Client بەرنامە یان ئامێرێکە کە داواکاری دەنێرێت. Server خزمەتگوزاری یان داتا دابین دەکات. مۆبایلەکەت دەتوانێت Client بێت کاتێک وێبسایت دەکەیتەوە.',
'لە پشتەوەدا زۆرجار چەند سێرڤەر، Cache، Load Balancer و Database پێکەوە کار دەکەن. هێڵکاری سادەکەمان ئەم وردەکارییانە کەم دەکاتەوە بۆ ئەوەی ئاسانتر تێبگەیت.',
'ئەگەر Client داواکاری HTTP بنێرێت، Server وەڵامی کۆدی دۆخ و زانیاری دەگەڕێنێتەوە. پەیوەندییەکە پێویستی بە ناونیشانی مەبەست و پرۆتۆکۆلی گونجاو هەیە.' ],[
'A client requests a service and a server provides data or functionality. Your phone acts as a client when opening a website.',
'Behind a web service, there may be caches, load balancers, databases and many servers. Our simplified diagram leaves out most of that infrastructure.',
'An HTTP server returns a status code and content to a client; reaching it requires suitable addressing and transport.']),
K('latency','◷','Latency و Bandwidth','Latency and bandwidth','دواکەوتن و فراوانی باند دوو شتی جیاوازن','Two different performance measures',[
'Latency ماوەیەکی کاتییە کە پەیام پێویستی پێیەتی لە خاڵێکەوە بۆ خاڵێکی تر بگات. Bandwidth توانای گواستنەوەی بڕێک داتا لە یەکەی کاتدا دەستنیشان دەکات.',
'Ping زۆرجار بۆ خەمڵاندنی RTT (ماوەی هاتن و چوونی پەیام) بەکاردێت. Mbps پێوەرێکی باوی خێرایی گواستنەوەی داتایە.',
'خێرایی ئەم ئەنیمەیشنە هیچ پەیوەندییەکی ڕاستەوخۆی بە Latency ـی API نییە. کاتەکانی Packet Flow لە تۆڕنما نموونەی فێرکارین و نابێت وەک پێوانەی ڕاستەقینە وەرگیرێن.' ],[
'Latency is delay: how long data takes to travel. Bandwidth is capacity: how much data can be transferred per unit of time.',
'Round-trip time (RTT) measures a there-and-back journey. Mbps is a common bandwidth measurement.',
'The speed of TORRNAMA animations does not represent measured network latency. Packet Flow times are teaching examples, not measurements.']),
K('glossary','✎','فەرهەنگی زاراوەکانی تۆڕ','Networking glossary','وشە گرنگەکان بە زمانی سادە','Key technical words explained',[
'Packet: پارچەیەک داتا کە بۆ گواستنەوە نێردراوە. Frame: یەکەی داتای چینی Data Link. Header: زانیاری کۆنترۆڵی سەرەتای پەیام.',
'Protocol: ڕێساکانی پەیوەندی. Router: ئامێری ڕێنیشاندانی پاکێت لە نێوان تۆڕەکان. Switch: ئامێری پەیوەستکردنی ئامێرەکانی ناو تۆڕی ناوخۆ. Gateway: دەروازەی پەیوەندی بە تۆڕێکی تر.',
'API: ڕووکارێک بۆ داواکاری نێوان بەرنامەکان. Endpoint: ناونیشانی خزمەتگوزاری. JSON: فۆرماتی داتا. Cache: هەڵگرتنی وەڵامی پێشوو بۆ بەکارهێنانی دواتر.' ],[
'Packet: a unit of data transferred through a network. Frame: a link-layer data unit. Header: control information carried with a message.',
'Protocol: agreed communication rules. Router: forwards between networks. Switch: connects devices inside a local network. Gateway: access point toward another network.',
'API: programmatic interface. Endpoint: a service URL. JSON: text data format. Cache: stored information for faster future use.'])
];
window.TORRNAMA_OSI=[
B('Physical — سیگناڵ، کێبڵ و گواستنەوەی بیتەکان. نموونە: فایبەر و پەیوەندییە فیزیکییەکان.','Physical — signals, cables and bits on the medium. Examples: fiber and physical links.'),
B('Data Link — دروستکردنی Frame و گەیاندن بە MAC Address لەسەر هەمان لینک. نموونە: Ethernet و Wi-Fi.','Data Link — framing and MAC-based delivery on the local link. Examples: Ethernet and Wi-Fi.'),
B('Network — ناونیشانی IP، دابەشکردنی تۆڕ و ڕێنیشاندانی پاکێت. نموونە: IPv4، IPv6 و ICMP.','Network — IP addressing and forwarding between networks. Examples: IPv4, IPv6 and ICMP.'),
B('Transport — گواستنەوە لە نێوان بەرنامەکان؛ دڵنیایی و ڕیزبەندی لە TCP یان سادەیی لە UDP.','Transport — endpoint-to-endpoint data delivery, reliability with TCP or lightweight delivery with UDP.'),
B('Session — دامەزراندن، پاراستن و کۆتاییهێنان بە دانیشتنی پەیوەندی لە مۆدێلی OSI.','Session — managing communication sessions in the conceptual OSI model.'),
B('Presentation — گۆڕینی شێوازی داتا، کۆدکردن و شێوازی پیشاندانی زانیاری؛ ناوەڕۆکی پارێزراو لە هەندێک نموونەدا.','Presentation — data representation, encoding and transformations; some encryption functions are described here conceptually.'),
B('Application — خزمەتگوزارییە نزیکەکانی بەرنامە، وەک HTTP، DNS، SMTP و FTP.','Application — user-facing network services such as HTTP, DNS, SMTP and FTP.')
];
window.TORRNAMA_PROTOCOL_DEPTH={
http:B('HTTP لە سیستەمی داواکاری–وەڵامدا کار دەکات. Browser داواکاری بە Method و URL دروست دەکات و سێرڤەر Status و Header و Body دەگەڕێنێتەوە. لە پڕۆژەکەدا داواکارییەکی JSONPlaceholder دەتوانیت ببینیت، بەڵام جووڵەی هێڵکارییەکە تەنها نموونەی فێرکارییە.','HTTP follows the request-response pattern. The browser sends a method and URL; the server returns status, headers and a body. The JSONPlaceholder request is live, but the animation is a conceptual illustration.'),
dns:B('بەبێ DNS ئامێرەکە زۆرجار ناتوانێت بە ناوی دۆمەین سێرڤەری گونجاو بدۆزێتەوە. Resolver دەتوانێت لە Cache وەڵام بداتەوە یان پرسیاری تر بکات. ڕوونیبێت کە لەم تاقیگەیە Google DNS-over-HTTPS بەکار دەهێنین.','Without DNS, a device cannot normally locate a server by its domain name. Resolvers may respond from cache or ask other DNS servers. The live lab sends DNS-over-HTTPS to Google.'),
tcp:B('TCP ژمارەی ڕیز و ACK بەکاردەهێنێت تا داتاکان بە ڕیز وەربگیرێن. SYN، SYN-ACK و ACK قۆناغە ناسراوەکانی دەستپێکی پەیوەندین. هەر تیرێک لە سیموڵەیشنەکە مانایەکی فێرکاریی هەیە، نەک پاکێتی تۆمارکراوی ڕاستەقینە.','TCP uses sequence numbers and acknowledgments to deliver ordered bytes. SYN, SYN-ACK and ACK are the classic connection handshake. Each animated arrow is an illustration, not an observed packet.'),
https:B('HTTPS پەیوەندی HTTP بە TLS دەپارێزێت و بڕوانامەی سێرڤەر یارمەتی ناسینەوەی ئەو لایەنە دەدات کە پەیوەندی پێوە دەکەیت. نهێنیبونی گواستنەوە جیاوازە لە متمانەپێکراوی هەموو ناوەڕۆکی ماڵپەڕ.','HTTPS protects HTTP in transit using TLS and server certificates. Encryption of the connection is different from a guarantee that every page or site is trustworthy.'),
udp:B('UDP سادەترە و پشتڕاستکردنەوە و دووبارە ناردنەوەی خۆکار وەک TCP نییە. بەرنامەی سەرەوەی UDP دەتوانێت ئەو توانایانە بە شێوەی تایبەت جێبەجێ بکات.','UDP is simpler and does not automatically provide acknowledgments or retransmission like TCP. Applications can add those behaviors when needed.'),
dhcp:B('لە IPv4 دا DHCP زۆرجار بە ڕیزبەندی Discover، Offer، Request و ACK ناونیشان و ڕێکخستنەکانی تۆڕ دابین دەکات. ئەمە دەکرێت بەپێی ڕێکخستنی تۆڕ جیاواز بێت.','In IPv4, DHCP often uses Discover, Offer, Request and ACK to lease network settings. Exact behavior depends on the network configuration.'),
arp:B('ARP لە IPv4 دا بۆ دۆزینەوەی MAC ـی ئامێری ناوخۆ کار دەکات. ئەگەر مەبەست لە هەمان تۆڕ نەبێت، زۆرجار MAC ـی Default Gateway پێویست دەبێت.','ARP maps an IPv4 address to a local-link MAC address. If the destination is remote, the MAC address of the default gateway may be needed instead.'),
ssh:B('SSH بۆ پەیوەندیی دوور و پارێزراو بەکاردێت. پێش ئاڵوگۆڕی فرمانەکان هەردوو لا پاراستن دامەزرێنن و ناسنامە دەپشکنن.','SSH is used for secure remote access. Peers establish cryptographic protection and authenticate identities before exchanging application messages.'),
ftp:B('FTP بۆ گواستنەوەی فایلە و کاناڵی کۆنترۆڵی لە کاناڵی داتاکە جیا دەکرێتەوە. FTP ـی سادە زۆرجار داتا نهێنی ناکات؛ SFTP پرۆتۆکۆلێکی جیاوازە.','FTP transfers files and distinguishes its control connection from data transfers. Plain FTP does not encrypt content; SFTP is a different protocol.'),
quic:B('QUIC لەسەر UDP دامەزراوە و پاراستنی TLS 1.3 و ڕووبارە جیاوازەکانی داتا تێدایە. HTTP/3 لەسەر QUIC کار دەکات.','QUIC runs on UDP with integrated TLS 1.3 and multiple independent streams. HTTP/3 uses QUIC.'),
};
})();
