/**
 * @author loins;
 * @time 20190313
 * 工具类
 */
class Utils {
    constructor() {
        this.IsEquipment = this.IsEquipment.bind(this);
        this.VersionTimeStamp = this.VersionTimeStamp.bind(this);
    }

    IsEquipment() {
        var equipment = 'PC';
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            equipment = 'Android';
        } else if (u.indexOf('iPhone') > -1) {
            equipment = 'iPhone';
            //苹果手机
        } else if (u.indexOf('Windows Phone') > -1) {
            equipment = 'Windows';
            //winphone手机
        }
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('micromessenger') != -1) {
            equipment = 'wx';
        }
        return 'loins' + equipment;
    }
    VersionTimeStamp() {
        return new Date().getTime();
    }
    LoinsInsertAfter(newElement, targetElement) {
        var parent = targetElement.parentNode;
        if (parent.lastChild == targetElement) {
            parent.appendChild(newElement);
        } else {
            parent.insertBefore(newElement, targetElement.nextSibling);
        }
    }
    LoinsContent(event, newNo, $) {
        if ($(event)[0].classList.value.indexOf('layui-icon-plus-square') > -1) {
            $(event)[0].classList.add('layui-icon-minus-square');
            $(event)[0].classList.remove('layui-icon-plus-square');
            var oTest = $(event).parent().parent().parent();
            var newNode = document.createElement("tr");
            newNode.setAttribute('loinsContent', $(event).parent().parent().parent().attr('data-index'))
                // var reforeNode = $(event).parent().parent().parent();`He is <b>${person.name}</b>and we wish to know his${person.age}.that is all`
                // var _html = `<td colspan=${cols.length+1}><div>40614124728974281479247982478924789247902740189247829749827</div></td>`
            newNode.innerHTML = newNo;
            this.LoinsInsertAfter(newNode, oTest[0]);
        } else {
            $(event)[0].classList.add('layui-icon-plus-square');
            $(event)[0].classList.remove('layui-icon-minus-square');
            $(event).parent().parent().parent().parent().find('tr[loinscontent="' + $(event).parent().parent().parent().attr('data-index') + '"]').remove();
        }
    }
}