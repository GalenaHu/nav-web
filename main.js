var keys = {
			0: ['q','w','e','r','t','y','u','i','o','p'],
			1: ['a','s','d','f','g','h','j','k','l'],
			2: ['z','x','c','v','b','n','m'],
			length: 3
		};
var hash = {
	q: 'https://www.qq.com/',
	w: 'https://weibo.com/',
	e: 'https://www.explainshell.com/',
	r: 'http://javascript.ruanyifeng.com/',
	t: 'http://www.ttmeiju.vip/',
	y: 'https://www.youtube.com/',
	u: undefined,
	i: undefined,
	o: undefined,
	p: undefined,
	a: 'https://www.amazon.com/',
	s: 'https://scholar.google.com/',
	d: 'http://www.dilidili.name/',
	f: undefined,
	g: 'https://www.google.com.hk/',
	h: undefined,
	j: 'http://js.jirengu.com/?html,output',
	k: undefined,
	l: 'http://localhost:8080',
	z: 'https://www.zimuku.cn/',
	x: 'https://xiedaimala.com/',
	c: 'http://www.cnki.net/',
	v: 'https://my.vultr.com/',
	b: 'https://www.bilibili.com/',
	n: undefined,
	m: undefined,
};

//取出lacalStorage中zzz对应的hash
hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null');
if (hashInLocalStorage) {
	hash = hashInLocalStorage;
}

//遍历keys
var i = 0;
while (i<keys.length) {
	var div1 = document.createElement('div');
	div1.className = 'row';
	wrapper.appendChild(div1);
	var j = 0;
	while (j<keys[i].length) {
		var div2 = document.createElement('div');
		div2.id = keys[i][j];
		div2.className = 'kbd';
		var letter = document.createElement('div');
		letter.textContent = keys[i][j];
		letter.className = 'letter';

		//弹出网址
		letter.onclick = function(e) {
			var thisRow = this.parentNode.parentNode;
			//如果已经存在则删除
			if (document.getElementsByClassName('site')) {
				var paras = document.getElementsByClassName('site');
				while(paras[0]) {
				    paras[0].parentNode.removeChild(paras[0]);
				}
			}
			var site = document.createElement('div');
			site.className = 'site';
			var key = this.parentNode.getAttribute('id');
			if (hash[key] != undefined) {
				site.textContent = hash[key];
			} else {
				site.textContent = 'none';
			}
			thisRow.parentNode.insertBefore(site, thisRow.nextSibling);
		};
		div2.appendChild(letter);


		//添加按钮
		var div3 = document.createElement('div');
		div3.className = 'buttonWrapper';

		//编辑按钮
		var button1 = document.createElement('button');
		button1.textContent = 'Edit';
		button1.id = keys[i][j] + 'Edit';
		button1.onclick = function(e) {
			var key = e['target']['id'][0];
			x = prompt('输入网址：');
			hash[key] = x;
			localStorage.setItem('zzz', JSON.stringify(hash));
			console.log(hash);
		};
		div3.appendChild(button1);

		//删除按钮
		var button2 = document.createElement('button');
		button2.textContent = 'Delete';
		button2.id = keys[i][j] + 'Delete';
		button2.onclick = function(e) {
			hash[key] = undefined;
			localStorage.setItem('zzz', JSON.stringify(hash));
			console.log(hash);
		};
		div3.appendChild(button2);

		div2.appendChild(div3);

		div1.appendChild(div2);
		j = j + 1;
	}
	i = i + 1;
}

//监听键盘
document.onkeypress = function(e) {
	key = e['key'];
	website = hash[key];
	window.open(website, '_blank'); 
};
//监听点击
document.onclick = function(e) {
	if (e.target.getAttribute('class') !== 'letter') {
		if (document.getElementsByClassName('site')) {
			var paras = document.getElementsByClassName('site');
			while(paras[0]) {
			    paras[0].parentNode.removeChild(paras[0]);
			}
		}
	}
}
	