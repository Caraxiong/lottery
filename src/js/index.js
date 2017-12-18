window.onload = function(){
	document.querySelector('a[data-elem=chou]').onclick = function(){
		let params = {
			delay : 100 ,
			minDelay : 50 ,
			cutSpeed : 10 ,
			addSpeed : 5,
			count : 0 ,
	      	picIndex: [0, 1, 2, 5, 8, 7, 6, 3],
	      	lastCount : 0 , //记圈
		}
		//按钮置灰
		this.disable = true;
		setTimeout(function(){
			//中奖的位置
			params.winning = 5
		},5000)

		params.li =  document.getElementsByTagName('li')
		params.len = params.li.length

		let chou = () => {
			//恢复边框颜色
			for(let i = 0; i < params.len; i++){
				if(i === 4){
					continue
				}
				params.li[i].style.borderColor = 'transparent'
			}

			params.curIndex = params.count % 8
			params.curLi = params.li[params.picIndex[params.curIndex]]
			params.curLi.style.borderColor = '#000'

			params.count += 1

			//判断是否拿到中奖号码
			if(params.winning){
				// 判断当前位置
				// 是否为最后一圈
				let flag = parseInt(params.lastCount / 8, 10) === 2 && params.curIndex === params.winning
				if(flag){
					clearTimeout(params.time)
					this.disable = false
					return 
				}else{
					params.delay += params.cutSpeed
					params.lastCount += 1
				}
			}
			if(params.delay <= params.minDelay){
				params.delay = params.minDelay
			}else{
				params.delay -= params.addSpeed
			}
			params.time = setTimeout(chou ,params.delay)
		}

		params.time = setTimeout(chou , params.delay)
	}
}