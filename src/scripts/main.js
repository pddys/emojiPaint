import jQuery from 'jquery';

(function($) {

  $('html')
    .removeClass('no-js')
    .addClass('js');
  // START JQUERY.

	const gridTag = $('.c-grid__item')

	let emojiData = []
	// emojiData = jsonData
	let randomEmojiData = emojiData[0]

	fetch('./emojiListCompact.json')
		.then(response => response.json())
		.then(jsonData => {
			emojiData = jsonData
			let randomNumber = Math.floor(Math.random() * emojiData.length)
			let randomEmojiData = emojiData[randomNumber]
			gridTag.html(randomEmojiData)

			// randomEmoji()
			// changeGridItems()
			$('.c-grid__reset').on("click", function () {
				let randomNumber = Math.floor(Math.random() * emojiData.length)
				let randomEmojiData = emojiData[randomNumber]
				gridTag.html(randomEmojiData)
			})

				$('.c-grid__item').hover(function() {
					$(this).text(randomEmojiData)
				})

			$('.c-grid__item').on("click", function () {
				let randomNumber = Math.floor(Math.random() * emojiData.length)
				const randomEmojiData = emojiData[randomNumber]
				console.log('new emoji: ' + randomEmojiData)
				$('.c-grid__item').hover(function() {
					$(this).text(randomEmojiData)
				})
		    });



		$('.c-grid__item').hover(function() {
			// let randomNumber = Math.floor(Math.random() * emojiData.length)
			// const randomEmojiData = emojiData[randomNumber]
			$(this).text(randomEmojiData)
		})
	})



	const changeGridItems = function () {
		if (emojiData.length > 0) {
			randomEmoji()
			gridTag.html(randomEmojiData)
		}
	}

	// $('.c-grid__reset').on("click", function () {
	// 	gridTag.html(randomEmojiData)
	// })

	// $('.c-grid__random').on("click", function () {
	//     function handler1() {
	// 		$(".c-grid__random").css('background', 'transparent')
	// 		$(document).on("click", function () {
	// 			let randomNumber = Math.floor(Math.random() * emojiData.length)
	// 			const randomEmojiData = emojiData[randomNumber]
	// 			console.log('new emoji: ' + randomEmojiData)
	// 			$('.c-grid__item').hover(function() {
	// 				$(this).text(randomEmojiData)
	// 			})
	// 	    });
	// 	    $(this).one("click", handler2);
	// 	}
	// 	function handler2() {
	// 		console.log('random mode')
	// 		$(".c-grid__random").css('background', 'green')
	// 		$('.c-grid__item').hover(function() {
	// 			let randomNumber = Math.floor(Math.random() * emojiData.length)
	// 			const randomEmojiData = emojiData[randomNumber]
	// 			$(this).text(randomEmojiData)
	// 		})
	// 	    $(this).one("click", handler1);
	// 	}
	// 	$(".c-grid__random").one("click", handler1);
	// })

	// const randomEmoji = function() {
	// 	if (emojiData.length > 0) {
	// 		let randomNumber = Math.floor(Math.random() * emojiData.length)
	// 		const randomEmojiData = emojiData[randomNumber]
	// 		console.log('new emoji: ' + randomEmojiData)
	// 	}
	// }

	// randomEmoji()






	// const randomNumber = Math.floor(Math.random() * emojiData.length)
	// console.log(randomNumber)
	// const randomEmojiData = emojiData[randomNumber]

  // console.log(randomEmojiData)




 //    var myDiv = $('.c-grid__item')
	// var newOption;
	// var emojiRange = [
	//   [128513, 128591], [9986, 10160], [128640, 128704]
	// ];

	// const changeEmoji = function () {
	// 	$(this).hover(function() {
	// 		$(this).html(randomEmojiData)
	// 	})
	// }


	// var emojiCompactRange = [
	//   emojiCompact.char
	// ];
	//inside emojRange 2d array , define range arrays (start number,end number).
	//1st array : Emoticons icons
	//2nd range : Dingbats.
	//3rd range : Transport and map symbols
    // const randomNumber = Math.floor(Math.random() * emojiCompactRange.length)
    // const randomEmoji = emojiCompactRange[randomNumber]
    // console.log("&#" + randomEmoji + ";")

	// for (var i = 0; i < emojiRange.length; i++) {
	//   var range = emojiRange[i];
	//   for (var x = range[0]; x < range[1]; x++) {

	//     newOption = document.createElement('div');
	//     newOption.value = x;
	//     newOption.innerHTML = "&#" + x + ";";
	//     myDiv.html(newOption);
	//   }

	// }



  // END JQUERY.
})(jQuery);

console.log('main.js works!');
