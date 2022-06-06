const closeTag = document.querySelector('.close')
                const overlay = document.querySelector('.js-overlay')
                const headerLabelDate = document.querySelector('.js-header__field-label-date')
                const monthCalender = document.querySelector('.header__field-month-calender')
                function hideMonthCalender() {
                    closeTag.classList.remove('overlay')
                    monthCalender.classList.add('header__field-month-calender')
                }
                
                function showCalender() {
                    closeTag.classList.add('overlay')
                    monthCalender.classList.remove('header__field-month-calender')

                }
                headerLabelDate.addEventListener('click',showCalender)
                overlay.addEventListener('click',hideMonthCalender)
                
                // SHOW SET NUMBER
                const setNumber = document.querySelector('.header__field-set-number')
                const headerLabelMember = document.querySelector('.js-header__field-label-member')
                const headerLabelContainer = document.querySelector('.header__field-label-container')
                function showSetNumber() {
                    setNumber.classList.remove('header__field-set-number')
                    closeTag.classList.add('overlay')
                }
                function hideSetNumber() {
                    setNumber.classList.add('header__field-set-number')
                    closeTag.classList.remove('overlay')
                }
                headerLabelMember.addEventListener('click',showSetNumber,hideMonthCalender)
                headerLabelContainer.addEventListener('click',function(event){
                    event.stopPropagation()
                })
                closeTag.addEventListener('click',hideSetNumber)

                // SHOW TRANSLATE
                const translateNav = document.querySelector('.js-header__item-translate-wrapper')
                const translateMenu = document.querySelector('.js-header__translate')

                function showTranslateMenu() {
                    translateMenu.classList.remove('header__translate')
                    closeTag.classList.add('overlay')
                }

                function hideTranslateMenu() {
                    closeTag.classList.remove('overlay')
                    translateMenu.classList.add('header__translate')
                }

                translateNav.addEventListener('click',showTranslateMenu)
                closeTag.addEventListener('click',hideTranslateMenu)

                // OUTLINE HEADER INPUT
                const headerInputOutline = document.querySelector('.header__input')
                const headerInputSearch = document.querySelector('.header__input-search')
                function showInputOutline() {
                    headerInputOutline.classList.add('header__input--outline')
                    closeTag.classList.add('overlay')
                }
                function hideInputOutline() {
                    closeTag.classList.remove('overlay')
                    headerInputOutline.classList.remove('header__input--outline')
                }
                headerInputSearch.addEventListener('click',showInputOutline)
                closeTag.addEventListener('click',hideInputOutline)

                // OUTLINE HEADER FIELD DATE
                // const headerLabelDate
                const headerFieldDateBox = document.querySelector('.header__field-date')
                function showDateOutline () {
                    headerFieldDateBox.classList.add('header__input--outline')
                    closeTag.classList.add('ovelay')
                }
                function hideDateOutline() {
                    headerFieldDateBox.classList.remove('header__input--outline')
                    closeTag.classList.remove('overlay')
                }
                headerLabelDate.addEventListener('click',showDateOutline)
                closeTag.addEventListener('click',hideDateOutline)

                // OUTLINE HEADER FIELD MEMBER
                const headerFieldMemberBox = document.querySelector('.header__field-member')
                function showMemberOutline () {
                    headerFieldMemberBox.classList.add('header__input--outline')
                    closeTag.classList.add('overlay')
                }
                function hideMemberOutline () {
                    headerFieldMemberBox.classList.remove('header__input--outline')
                    closeTag.classList.remove('overlay')
                }
                headerLabelMember.addEventListener('click',showMemberOutline)
                closeTag.addEventListener('click',hideMemberOutline)