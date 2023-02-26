$(function)() {
    var moreBtn = $('.more_btn')
    var closeBtn = $('.close_btn')
    var dimm = $('.dimm')
    var modal = $('.modal') //ui를 만들때는 var 변수 자주 사용함

    moreBtn.click(function () {
        dimm.show()
        modal.show()
      })

      closeBtn.click(function () {
        dimm.hide()
        modal.hide()
      })

      //   한번 이상 사용되는 객체는 변수로 잡기
}