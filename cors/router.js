app.get('/getNew',function(req,res){
  var cb = req.query.callback
  var news = [
    '团中央给单身找伴侣 帮得了你吗',
    '这个贪官行贿3亿 为何只判了4年',
    '夫妇亲热遭偷拍 被平台现场直播',
    '熊黛林现身"捞金" 拒谈过往情事',
    '汪东城晒孙悟空造型照 画面穿越',
    '邹市明生日会 与冉莹颖恩爱互动',
    '马苏获奖后台画风突变 搞怪自拍',
    '美泄密士兵服刑7年:狱中想变性',
    '英大选党派竞选 宣言"脱欧"为主',
    '特朗普发推文反驳指控:政治迫害',
    '韩"萨德"纷争再起 撤走可能性小'
  ]
  var arr = []
  for (var i = 0; i < 3; i++) {
  	var data = parseInt(Math.random()*news.length)
  	arr.push(news[data])
  	//把取出的这条新闻在原json数组中删除，防止再次取到
  	news.splice(data,1)
  }
  res.header('Access-Control-Allow-Origin','*')
  res.send(arr)

})