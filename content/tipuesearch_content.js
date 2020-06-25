var tipuesearch = {"pages": [{'title': '首頁', 'text': '此網頁紀錄108學年度網際內容管理課程 \n 四設計一甲 \n 40823137 \n 張睿祐 \n 影片: https://www.youtube.com/channel/UC85YsuUKZee_rfu-xChQswg?view_as=subscriber \n 倉儲: https://github.com/40823137/wcm2020 \n', 'tags': '', 'url': '首頁.html'}, {'title': '每周上課內容', 'text': '', 'tags': '', 'url': '每周上課內容.html'}, {'title': 'W1~W5', 'text': '建立隨身系統 \n (1)下載 3.8.2 python 解譯器並安裝置可攜系統內 \n (2)下載 Scite.exe 編輯器至可攜系統 \n \xa0 \xa0 並將內定的 code.page=0\xa0改為\xa0code.page=65001 \n \xa0 \xa0 才能正常顯示中文而非亂碼 \n (3)建立stop.bat和start.bat \n (4) \xa0利用 get-pip.py\xa0d在可攜系統內安裝pipi \n (5)下載64位元msys2(安裝在電腦中再複製到data內) \n (6)測試是否可以編譯c程式 \n', 'tags': '', 'url': 'W1~W5.html'}, {'title': 'W6~W9', 'text': '學習使用 Youtube Live+OBS串流進行直播 \n 使用android手機座為web cam \n 使用google meet 進行上課、錄製、分享畫面的練習 \n', 'tags': '', 'url': 'W6~W9.html'}, {'title': 'w10~w11', 'text': '說明如何利用 Python 程式讀取學員修課檔案, 以及從 Google Sheet 轉出的 .csv, 分別處理為 List 與 Dictionary 資料格式之後, 逐一根據學員 List 學號, 從 Dictionary 取出自評成績. \n 說明如何將網際 Python 放入 Virtualbox 虛擬主機中 \n', 'tags': '', 'url': 'w10~w11.html'}, {'title': 'w12~w15', 'text': '說明如何在 Windows 10 中安裝 Ubuntu 20.04 Virtualbox 虛擬主機教學影片 \n 嘗試建立 wcm1.kmol.info ~ wcm4.kmol.info 等實體主機. \n Ubuntu 20.04 編譯 NGINX\xa0 \n 利用 Pypdf2 切割 pdf 檔案 \n 利用 HxD 編修 pip.exe\xa0', 'tags': '', 'url': 'w12~w15.html'}, {'title': 'w16~w17', 'text': '利用pypdf2擷取pdf與合併pdf的程式，並利用API放上動態網站測試。 \n', 'tags': '', 'url': 'w16~w17.html'}, {'title': '操作設定', 'text': '', 'tags': '', 'url': '操作設定.html'}, {'title': 'ssh', 'text': '建立ssh key \n 在cmd視窗輸入sh \n 然後輸入 ssh-keygen -t rsa -b 4096 -C "學號" \n \n 開啟puttygen.exe並load剛剛建立的key轉為ppk檔 \n \n \n 將pub將public key打開並複製到github \n \n \n', 'tags': '', 'url': 'ssh.html'}, {'title': 'Pelican建立Blog', 'text': '開啟launchLeo \n \n 開啟pelican.leo並到pelican設定 共用設定 \n \n 到遠端設定 \n \n 到markdown編寫想推送的blog內容 \n \n 在cmd視窗輸入pelican markdown -o blog -s local_publishconf.py完成建立 \n', 'tags': '', 'url': 'Pelican建立Blog.html'}, {'title': 'blogger', 'text': '到blogger登入學校帳號並建立新網誌 \n \n 設定網址 \n \n 設定名稱後即完成 \n \n', 'tags': '', 'url': 'blogger.html'}, {'title': 'cmsimde建立網頁', 'text': '到github建立倉儲 \n \n \n 在可攜系統中建立tmp資料夾 \n 並將倉儲git clone至tmp裡面 \n 使用 git submodule add\xa0 \n 將cmsimde放入wcm2020 \n 將 up_ir中的檔案複製到wcm2020 \n 打開cmd視窗進入到cmsimde \n \n 輸入python wsgi.py \n 在瀏覽器中到localhost:9443即可編輯網頁 \n', 'tags': '', 'url': 'cmsimde建立網頁.html'}, {'title': 'Video', 'text': 'OBS串流練習 \n \n 期中使用meet 錄製影片報告 \n \n 期末影片報告 \n', 'tags': '', 'url': 'Video.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n .', 'tags': '', 'url': 'Develop.html'}]};