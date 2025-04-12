document.addEventListener('DOMContentLoaded', function() {
    const enBtn = document.getElementById('en-btn');
    const zhBtn = document.getElementById('zh-btn');
    const enElements = document.querySelectorAll('.en');
    const zhElements = document.querySelectorAll('.zh');
    
    // 默认显示英文
    setLanguage('en');
    
    // 英文按钮点击事件
    enBtn.addEventListener('click', function() {
        setLanguage('en');
    });
    
    // 中文按钮点击事件
    zhBtn.addEventListener('click', function() {
        setLanguage('zh');
    });
    
    // 设置语言函数
    function setLanguage(lang) {
        if (lang === 'en') {
            // 显示英文，隐藏中文
            enElements.forEach(el => el.style.display = 'block');
            zhElements.forEach(el => el.style.display = 'none');
            
            // 更新按钮样式
            enBtn.classList.add('active');
            zhBtn.classList.remove('active');
            
            // 更新HTML语言属性
            document.documentElement.lang = 'en';
            
            // 更新页面标题
            document.title = 'Kaiyang Jia - Personal Academic Website';
        } else {
            // 显示中文，隐藏英文
            enElements.forEach(el => el.style.display = 'none');
            zhElements.forEach(el => el.style.display = 'block');
            
            // 更新按钮样式
            enBtn.classList.remove('active');
            zhBtn.classList.add('active');
            
            // 更新HTML语言属性
            document.documentElement.lang = 'zh-CN';
            
            // 更新页面标题
            document.title = '贾铠阳 - 个人学术主页';
        }
    }
});