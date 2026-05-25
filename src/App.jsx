function App() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hi-Precision Diagnostics</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;900&family=Roboto+Slab:wght@400;500;600;700&display=swap');\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\n:root{\n  --hp-navy:#0B1F3A;--hp-navy2:#162E50;--hp-teal:#0D7C6B;--hp-teal-mid:#1D9E75;\n  --hp-teal-light:#5DCAA5;--hp-teal-bg:rgba(13,124,107,.08);--hp-red:#D85A30;--hp-amber:#BA7517;\n  --bg:linear-gradient(135deg,#e8eef5 0%,#dce8f0 50%,#e5ecf4 100%);\n  --bg-solid:#e8eef5;--bg2:rgba(255,255,255,0.72);--bg3:rgba(255,255,255,0.45);\n  --text1:#111827;--text2:#6B7280;\n  --border:rgba(255,255,255,0.6);--border2:rgba(0,0,0,0.07);\n  --radius:14px;--font:'Roboto',sans-serif;--display:'Roboto Slab',serif;\n  --shadow-sm:0 2px 8px rgba(11,31,58,.06),0 1px 3px rgba(11,31,58,.04);\n  --shadow-md:0 8px 24px rgba(11,31,58,.10),0 2px 8px rgba(11,31,58,.06),inset 0 1px 0 rgba(255,255,255,0.8);\n  --shadow-lg:0 20px 48px rgba(11,31,58,.14),0 6px 16px rgba(11,31,58,.08),inset 0 1px 0 rgba(255,255,255,0.9);\n  --shadow-xl:0 32px 64px rgba(11,31,58,.18),0 12px 32px rgba(11,31,58,.12),inset 0 1px 0 rgba(255,255,255,0.9);\n  --glass-bg:rgba(255,255,255,0.65);--glass-blur:backdrop-filter:blur(20px) saturate(180%);\n  --neu-out:6px 6px 16px rgba(166,180,200,.6),-4px -4px 12px rgba(255,255,255,.85);\n  --neu-in:inset 3px 3px 8px rgba(166,180,200,.5),inset -2px -2px 6px rgba(255,255,255,.8);\n}\nhtml{scroll-behavior:smooth}\nbody{font-family:var(--font);background:#e8eef5;background-image:linear-gradient(135deg,#e8eef5 0%,#dce8f0 50%,#e5ecf4 100%);color:var(--text1);font-size:15px;height:100vh;display:flex;flex-direction:column;overflow:hidden;position:relative}\nbody::before{content:'';position:fixed;inset:0;background:radial-gradient(ellipse 80% 60% at 20% 10%,rgba(13,124,107,.06) 0%,transparent 60%),radial-gradient(ellipse 60% 50% at 80% 80%,rgba(11,31,58,.05) 0%,transparent 50%);pointer-events:none;z-index:0}\n\n/* ═══ LOGIN ═══ */\n.login-container{position:fixed;inset:0;background:linear-gradient(135deg,#0B1F3A 0%,#0f2d52 40%,#0d3547 100%);display:flex;align-items:center;justify-content:center;z-index:1000}\n.login-container::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 30% 40%,rgba(13,124,107,.15) 0%,transparent 60%),radial-gradient(ellipse 50% 50% at 70% 60%,rgba(93,202,165,.08) 0%,transparent 50%)}\n.login-card{background:rgba(255,255,255,0.92);backdrop-filter:blur(32px) saturate(200%);-webkit-backdrop-filter:blur(32px) saturate(200%);border-radius:24px;width:440px;max-width:92vw;padding:48px;box-shadow:0 40px 80px rgba(0,0,0,.35),0 12px 32px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,1);border:1px solid rgba(255,255,255,0.7);position:relative}\n.login-header{text-align:center;margin-bottom:36px}\n.login-logo{width:72px;height:72px;background:linear-gradient(135deg,#0D7C6B 0%,#0B1F3A 100%);border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 12px 28px rgba(13,124,107,.4),inset 0 1px 0 rgba(255,255,255,.15)}\n.login-logo svg{width:36px;height:36px;fill:none;stroke:#fff;stroke-width:2;position:relative;z-index:1}\n.login-brand{font-family:var(--display);font-size:28px;color:var(--text1);font-weight:700;letter-spacing:-.01em;margin-bottom:6px;line-height:1}\n.login-brand-hi{color:var(--hp-teal)}\n.login-brand-precision{color:var(--hp-navy)}\n.login-brand-sub{display:block;font-family:var(--font);font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--text2);margin-top:6px}\n.login-sub{font-size:13px;color:var(--text2);margin-top:4px}\n.login-form{display:flex;flex-direction:column;gap:18px}\n.login-input-group{display:flex;flex-direction:column;gap:7px}\n.login-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--text2)}\n.login-input-wrap{position:relative}\n.login-input{border:1.5px solid rgba(0,0,0,.1);border-radius:12px;padding:13px 14px;font-family:var(--font);font-size:15px;color:var(--text1);background:rgba(255,255,255,.8);outline:none;transition:all .2s;width:100%;box-shadow:var(--neu-in)}\n.login-input:focus{border-color:var(--hp-teal);box-shadow:0 0 0 3px rgba(13,124,107,.12),var(--neu-in)}\n.login-input-wrap .toggle-password{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text2);cursor:pointer;font-size:18px;padding:4px}\n.login-error{background:rgba(216,90,48,.08);color:var(--hp-red);border:1px solid rgba(216,90,48,.2);padding:10px 14px;border-radius:10px;font-size:13px;display:none;margin-top:4px}\n.login-error.show{display:block}\n.login-btn{background:linear-gradient(135deg,var(--hp-teal) 0%,#0a6559 100%);color:#fff;border:none;padding:14px 20px;border-radius:12px;font-family:var(--font);font-size:15px;font-weight:700;cursor:pointer;transition:all .2s;width:100%;margin-top:8px;box-shadow:0 8px 20px rgba(13,124,107,.35),inset 0 1px 0 rgba(255,255,255,.15);letter-spacing:.02em}\n.login-btn:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(13,124,107,.45),inset 0 1px 0 rgba(255,255,255,.15)}\n.login-btn:active{transform:translateY(0)}\n\n/* ═══ TOPBAR ═══ */\n.topbar{background:rgba(11,31,58,.95);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);display:flex;align-items:center;justify-content:space-between;padding:0 22px;height:58px;flex-shrink:0;z-index:10;border-bottom:1px solid rgba(255,255,255,.08);box-shadow:0 4px 20px rgba(0,0,0,.2);position:relative}\n.topbar::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent 0%,var(--hp-teal) 20%,var(--hp-teal-light) 50%,var(--hp-teal) 80%,transparent 100%)}\n.topbar-brand{display:flex;align-items:center;gap:12px}\n.topbar-logo{width:36px;height:36px;background:linear-gradient(135deg,var(--hp-teal) 0%,var(--hp-teal-mid) 100%);border-radius:10px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(13,124,107,.35),inset 0 1px 0 rgba(255,255,255,.2)}\n.topbar-logo svg{width:18px;height:18px;fill:none;stroke:#fff;stroke-width:2.2}\n.topbar-name{font-family:var(--display);font-size:18px;color:#fff;font-weight:700;letter-spacing:-.01em;line-height:1}\n.topbar-name .hi{color:var(--hp-teal-light)}\n.topbar-name .tagline{display:block;font-family:var(--font);font-size:9px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-top:1px}\n.view-switcher{display:flex;gap:3px;background:rgba(255,255,255,.07);border-radius:10px;padding:3px;border:1px solid rgba(255,255,255,.08)}\n.view-btn{font-family:var(--font);font-size:11px;font-weight:700;padding:6px 14px;border-radius:8px;border:none;cursor:pointer;color:rgba(255,255,255,.5);background:transparent;transition:all .2s;letter-spacing:.06em;text-transform:uppercase}\n.view-btn.active{background:linear-gradient(135deg,var(--hp-teal) 0%,var(--hp-teal-mid) 100%);color:#fff;box-shadow:0 4px 12px rgba(13,124,107,.4)}\n.topbar-user{display:flex;align-items:center;gap:10px}\n.user-avatar{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--hp-teal-mid) 0%,var(--hp-teal) 100%);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#fff;border:2px solid rgba(255,255,255,.2);box-shadow:0 4px 10px rgba(13,124,107,.3)}\n.user-name{font-size:13px;color:rgba(255,255,255,.65);font-weight:500}\n\n/* ═══ MAIN LAYOUT ═══ */\n.main{display:flex;flex:1;overflow:hidden;position:relative;z-index:1}\n\n/* ═══ SIDEBAR ═══ */\n.sidebar{width:218px;background:rgba(11,31,58,.92);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);display:flex;flex-direction:column;flex-shrink:0;padding:16px 0;overflow-y:auto;border-right:1px solid rgba(255,255,255,.06);box-shadow:4px 0 20px rgba(0,0,0,.15)}\n.sidebar-section{font-size:9px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.2);padding:20px 18px 7px}\n.nav-item{display:flex;align-items:center;gap:10px;padding:10px 16px;cursor:pointer;color:rgba(255,255,255,.48);font-size:14px;transition:all .18s;border-left:3px solid transparent;user-select:none;margin:1px 8px;border-radius:10px;font-weight:500}\n.nav-item:hover{background:rgba(255,255,255,.07);color:rgba(255,255,255,.85)}\n.nav-item.active{background:rgba(13,124,107,.2);border-left-color:var(--hp-teal-mid);color:var(--hp-teal-light);box-shadow:inset 0 0 0 1px rgba(13,124,107,.2)}\n.nav-item i{font-size:16px;width:18px;text-align:center}\n.nav-badge{margin-left:auto;background:var(--hp-red);color:#fff;font-size:9px;font-weight:800;padding:2px 6px;border-radius:8px;box-shadow:0 2px 6px rgba(216,90,48,.4)}\n.sidebar-footer{margin-top:auto;padding:12px 8px;border-top:1px solid rgba(255,255,255,.06)}\n.sidebar-footer-item{display:flex;align-items:center;gap:8px;color:rgba(255,255,255,.32);font-size:13px;padding:7px 10px;cursor:pointer;transition:all .15s;border-radius:8px;font-weight:500}\n.sidebar-footer-item:hover{color:rgba(255,255,255,.7);background:rgba(255,255,255,.06)}\n.sidebar-footer-item i{font-size:15px}\n\n/* ═══ CONTENT ═══ */\n.content{flex:1;padding:24px;overflow-y:auto;position:relative}\n.page{display:none}.page.active{display:block}\n.content-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px;flex-wrap:wrap;gap:10px}\n.content-title{font-family:var(--display);font-size:32px;font-weight:700;color:var(--text1);letter-spacing:-.01em;line-height:1.1;font-style:normal}\n.content-sub{font-size:13px;color:var(--text2);margin-top:5px;font-weight:500}\n\n/* ═══ BUTTONS ═══ */\n.btn-primary{background:linear-gradient(135deg,var(--hp-teal) 0%,#0a6559 100%);color:#fff;border:none;padding:10px 18px;border-radius:10px;font-family:var(--font);font-size:14px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:all .2s;white-space:nowrap;box-shadow:0 6px 16px rgba(13,124,107,.3),inset 0 1px 0 rgba(255,255,255,.15);letter-spacing:.01em}\n.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(13,124,107,.4),inset 0 1px 0 rgba(255,255,255,.15)}\n.btn-primary:active{transform:translateY(0)}\n.btn-primary i{font-size:15px}\n.btn-secondary{background:var(--glass-bg);color:var(--text1);border:1px solid var(--border);padding:8px 14px;border-radius:10px;font-family:var(--font);font-size:13px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:all .2s;backdrop-filter:blur(10px);box-shadow:var(--shadow-sm)}\n.btn-secondary:hover{transform:translateY(-1px);box-shadow:var(--shadow-md);background:rgba(255,255,255,.85)}\n.btn-danger{background:rgba(216,90,48,.08);color:var(--hp-red);border:1px solid rgba(216,90,48,.2);padding:8px 14px;border-radius:10px;font-family:var(--font);font-size:13px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:5px;transition:all .2s}\n.btn-danger:hover{background:rgba(216,90,48,.14)}\n.icon-btn{min-width:32px;min-height:32px;display:inline-flex;align-items:center;justify-content:center}\n\n/* ═══ STATS ═══ */\n.stats-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:18px}\n.stat-card{background:var(--glass-bg);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border:1px solid var(--border);border-radius:var(--radius);padding:16px 18px;box-shadow:var(--shadow-md);transition:all .25s;position:relative;overflow:hidden}\n.stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--hp-teal) 0%,var(--hp-teal-light) 100%);opacity:0;transition:opacity .2s}\n.stat-card:hover{transform:translateY(-4px) scale(1.01);box-shadow:var(--shadow-lg)}\n.stat-card:hover::before{opacity:1}\n.stat-label{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--text2);margin-bottom:8px}\n.stat-value{font-size:26px;font-weight:700;color:var(--text1);line-height:1;font-family:var(--display)}\n.stat-delta{font-size:13px;margin-top:6px;display:flex;align-items:center;gap:3px;font-weight:500}\n.stat-delta.up{color:#0F6E56}.stat-delta.down{color:#993C1D}\n.stat-delta i{font-size:12px}\n\n/* ═══ PANEL ═══ */\n.panel{background:var(--glass-bg);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;margin-bottom:14px;box-shadow:var(--shadow-md)}\n.panel-header{padding:15px 20px;border-bottom:1px solid var(--border2);display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.4)}\n.panel-title{font-size:14px;font-weight:700;color:var(--text1);display:flex;align-items:center;gap:8px}\n.panel-title i{font-size:16px;color:var(--hp-teal)}\n.panel-action{font-size:13px;color:var(--hp-teal);cursor:pointer;font-weight:700;border:none;background:none;font-family:var(--font);transition:color .15s}\n.panel-action:hover{color:var(--hp-teal-mid)}\n\n/* ═══ GRID LAYOUTS ═══ */\n.two-col{display:grid;grid-template-columns:1fr 300px;gap:14px;margin-bottom:14px}\n.two-col-equal{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}\n.three-col{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:14px}\n\n/* ═══ TABLE ═══ */\n.data-table{width:100%;border-collapse:collapse;font-size:14px}\n.data-table th{font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--text2);font-weight:800;padding:10px 16px;text-align:left;border-bottom:1px solid var(--border2);background:rgba(255,255,255,.5)}\n.data-table td{padding:12px 16px;border-bottom:1px solid rgba(0,0,0,.04);color:var(--text1);vertical-align:middle}\n.data-table tr:last-child td{border-bottom:none}\n.data-table tbody tr{transition:background .12s}\n.data-table tbody tr:hover td{background:rgba(13,124,107,.04)}\n.data-table .actions{display:flex;gap:6px}\n.data-table tbody tr.overdue td{background:rgba(216,90,48,.04)}\n\n/* ═══ BADGES ═══ */\n.badge{display:inline-flex;align-items:center;gap:4px;font-size:11px;font-weight:800;padding:3px 10px;border-radius:20px;letter-spacing:.02em}\n.badge-waiting{background:rgba(186,117,23,.12);color:#7A5200;border:1px solid rgba(186,117,23,.2)}\n.badge-active{background:rgba(13,124,107,.12);color:#065040;border:1px solid rgba(13,124,107,.2)}\n.badge-done{background:rgba(15,110,86,.1);color:#1F4A08;border:1px solid rgba(15,110,86,.2)}\n.badge-urgent{background:rgba(216,90,48,.12);color:#7A1E06;border:1px solid rgba(216,90,48,.2)}\n.badge-purple{background:rgba(60,52,137,.1);color:#3C3489;border:1px solid rgba(60,52,137,.2)}\n.badge-grey{background:rgba(107,114,128,.08);color:var(--text2);border:1px solid rgba(107,114,128,.15)}\n.wait-badge{font-size:12px;font-weight:700;padding:3px 9px;border-radius:8px}\n.wait-green{background:rgba(15,110,86,.1);color:#1F4A08}\n.wait-amber{background:rgba(186,117,23,.12);color:#633806}\n.wait-red{background:rgba(216,90,48,.12);color:var(--hp-red)}\n\n/* ═══ SEARCH/FILTER ═══ */\n.filter-bar{display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid var(--border2);flex-wrap:wrap}\n.search-wrap{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.7);border:1px solid var(--border);border-radius:12px;padding:10px 14px;flex:1;min-width:200px;box-shadow:var(--neu-in);backdrop-filter:blur(10px);transition:all .2s}\n.search-wrap:focus-within{border-color:var(--hp-teal);box-shadow:0 0 0 3px rgba(13,124,107,.1),var(--neu-in)}\n.search-wrap i{color:var(--text2);font-size:16px;flex-shrink:0}\n.search-wrap input{border:none;background:transparent;font-family:var(--font);font-size:14px;color:var(--text1);outline:none;flex:1;min-width:0;font-weight:500}\n.filter-select{border:1px solid var(--border);border-radius:10px;background:rgba(255,255,255,.7);font-family:var(--font);font-size:13px;color:var(--text1);padding:9px 12px;cursor:pointer;outline:none;backdrop-filter:blur(10px);box-shadow:var(--shadow-sm);font-weight:500}\n\n/* ═══ FILTER CHIPS ═══ */\n.filter-chips{display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap}\n.filter-chip{padding:8px 16px;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;border:1px solid var(--border);background:rgba(255,255,255,.6);color:var(--text2);transition:all .2s;backdrop-filter:blur(10px);box-shadow:var(--shadow-sm)}\n.filter-chip.active{background:linear-gradient(135deg,var(--hp-teal) 0%,var(--hp-teal-mid) 100%);color:#fff;border-color:transparent;box-shadow:0 6px 16px rgba(13,124,107,.3)}\n.filter-chip:hover:not(.active){background:rgba(255,255,255,.85);transform:translateY(-1px);box-shadow:var(--shadow-md)}\n\n/* ═══ QUEUE LIST ═══ */\n.queue-list{padding:8px}\n.queue-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;margin-bottom:5px;cursor:pointer;transition:all .2s;border:1px solid transparent}\n.queue-item:hover{background:rgba(255,255,255,.6);border-color:var(--border);box-shadow:var(--shadow-sm);transform:translateX(3px)}\n.queue-item.active-item{background:rgba(13,124,107,.08)}\n.queue-num{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,var(--hp-navy) 0%,var(--hp-navy2) 100%);color:#fff;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 8px rgba(11,31,58,.3)}\n.queue-num.qurgent{background:linear-gradient(135deg,var(--hp-red) 0%,#c04a20 100%)}\n.queue-num.qactive{background:linear-gradient(135deg,var(--hp-teal-mid) 0%,var(--hp-teal) 100%)}\n.queue-info{flex:1;min-width:0}\n.queue-name{font-size:14px;font-weight:700;color:var(--text1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.queue-detail{font-size:12px;color:var(--text2);font-weight:500}\n.queue-time{font-size:13px;color:var(--text2);flex-shrink:0}\n\n/* ═══ FORM ═══ */\n.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}\n.form-group{display:flex;flex-direction:column;gap:6px}\n.form-group.full{grid-column:1/-1}\n.form-label{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.09em;color:var(--text2)}\n.form-label span{color:var(--hp-red)}\n.form-input,.form-select,.form-textarea{border:1.5px solid rgba(0,0,0,.08);border-radius:10px;padding:11px 13px;font-family:var(--font);font-size:14px;color:var(--text1);background:rgba(255,255,255,.75);outline:none;transition:all .2s;width:100%;box-shadow:var(--neu-in);font-weight:500}\n.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--hp-teal);box-shadow:0 0 0 3px rgba(13,124,107,.1),var(--neu-in)}\n.form-input.error,.form-select.error,.form-textarea.error{border-color:var(--hp-red)!important}\n.form-input::placeholder{color:var(--text2);opacity:.5}\n.form-textarea{resize:vertical;min-height:72px}\n.form-section{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--hp-teal);margin:18px 0 12px;padding-bottom:8px;border-bottom:1px solid rgba(13,124,107,.15)}\n.form-group.required .form-input,.form-group.required .form-select,.form-group.required .form-textarea{border-left:3px solid var(--hp-teal)}\n\n/* ═══ WIZARD ═══ */\n.wizard-progress{display:flex;align-items:center;gap:8px;margin-bottom:28px;padding:0 16px}\n.wizard-step{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;position:relative}\n.wizard-step-num{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.5);color:var(--text2);font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;transition:all .25s;z-index:1;border:1px solid var(--border);box-shadow:var(--shadow-sm)}\n.wizard-step.active .wizard-step-num{background:linear-gradient(135deg,var(--hp-teal) 0%,var(--hp-teal-mid) 100%);color:#fff;border-color:transparent;box-shadow:0 6px 16px rgba(13,124,107,.35)}\n.wizard-step.done .wizard-step-num{background:rgba(15,110,86,.1);color:#1F4A08;border-color:rgba(15,110,86,.2)}\n.wizard-step-label{font-size:12px;color:var(--text2);font-weight:600}\n.wizard-step.active .wizard-step-label{color:var(--hp-teal);font-weight:800}\n.wizard-step::after{content:'';position:absolute;top:18px;left:50%;width:100%;height:2px;background:rgba(0,0,0,.08);z-index:0}\n.wizard-step:last-child::after{display:none}\n.wizard-step.done::after{background:var(--hp-teal)}\n.wizard-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:22px;padding-top:18px;border-top:1px solid var(--border2)}\n\n/* ═══ CONSENT BOX ═══ */\n.consent-box{background:rgba(13,124,107,.06);border:1px solid rgba(13,124,107,.2);border-radius:12px;padding:16px;margin:16px 0}\n.consent-box-content{font-size:13px;color:var(--text1);line-height:1.6;margin-bottom:12px}\n.consent-checkbox{display:flex;align-items:flex-start;gap:10px}\n.consent-checkbox input{margin-top:2px;accent-color:var(--hp-teal);width:18px;height:18px;cursor:pointer}\n.consent-checkbox label{font-size:14px;color:var(--text1);cursor:pointer;flex:1}\n\n/* ═══ SUMMARY CARD ═══ */\n.summary-card{background:rgba(255,255,255,.6);border:1px solid var(--border);border-radius:12px;padding:18px;margin-bottom:16px;box-shadow:var(--shadow-sm)}\n.summary-title{font-size:14px;font-weight:700;color:var(--text1);margin-bottom:12px}\n.summary-row{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid rgba(0,0,0,.05);font-size:13px}\n.summary-row:last-child{border-bottom:none}\n.summary-label{color:var(--text2);font-weight:500}\n.summary-value{font-weight:700;color:var(--text1)}\n\n/* ═══ APPT ═══ */\n.appt-row{display:flex;align-items:center;gap:10px;padding:12px 18px;border-bottom:1px solid rgba(0,0,0,.04);transition:background .12s}\n.appt-row:hover{background:rgba(255,255,255,.4)}\n.appt-row:last-child{border-bottom:none}\n.appt-time-col{font-size:11px;font-weight:800;color:var(--text2);width:66px;flex-shrink:0;line-height:1.2}\n.appt-dot{width:12px;height:12px;border-radius:50%;flex-shrink:0}\n.appt-dot.done{background:#2CAF7B;box-shadow:0 0 0 3px rgba(44,175,123,.18)}\n.appt-dot.now{background:#0D9CFF;border:3px solid #A0D8FF;box-shadow:0 0 0 3px rgba(13,156,255,.18);animation:pulse-dot 2s infinite}\n.appt-dot.pending{background:#D1D5DB;border:2px solid #B0B7C0}\n.appt-dot.urgent{background:var(--hp-red);box-shadow:0 0 0 3px rgba(216,90,48,.2)}\n@keyframes pulse-dot{0%,100%{box-shadow:0 0 0 3px rgba(13,156,255,.18)}50%{box-shadow:0 0 0 6px rgba(13,156,255,.05)}}\n.appt-info{flex:1}\n.appt-name{font-size:14px;font-weight:700;color:var(--text1)}\n.appt-type{font-size:13px;color:var(--text2);font-weight:500}\n\n/* ═══ CALENDAR ═══ */\n.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;padding:14px}\n.cal-day-hdr{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--text2);text-align:center;padding:4px}\n.cal-day{min-height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:13px;cursor:pointer;transition:all .15s;position:relative;font-weight:500}\n.cal-day:hover{background:rgba(255,255,255,.7);box-shadow:var(--shadow-sm)}\n.cal-day.other-month{color:rgba(0,0,0,.2)}\n.cal-day.today{background:linear-gradient(135deg,var(--hp-teal) 0%,var(--hp-teal-mid) 100%);color:#fff;font-weight:800;box-shadow:0 6px 14px rgba(13,124,107,.35)}\n.cal-day.selected{background:rgba(13,124,107,.1);color:var(--hp-teal);font-weight:700;border:2px solid rgba(13,124,107,.3)}\n.cal-day.today.selected{background:linear-gradient(135deg,var(--hp-teal) 0%,var(--hp-teal-mid) 100%);color:#fff}\n.cal-day.has-appt::after{content:'';position:absolute;bottom:4px;left:50%;transform:translateX(-50%);width:4px;height:4px;border-radius:50%;background:var(--hp-teal-light)}\n.cal-day.today.has-appt::after{background:#fff}\n\n/* ═══ COLOR LEGEND ═══ */\n.color-legend{display:flex;gap:16px;padding:12px 16px;background:rgba(255,255,255,.5);border-radius:12px;margin-bottom:14px;flex-wrap:wrap;align-items:center;border:1px solid var(--border);box-shadow:var(--shadow-sm)}\n.legend-item{display:flex;align-items:center;gap:7px;font-size:13px;font-weight:600;color:var(--text2)}\n.legend-dot{width:14px;height:14px;border-radius:50%;flex-shrink:0}\n.legend-dot.done{background:#2CAF7B;box-shadow:0 0 0 3px rgba(44,175,123,.2)}\n.legend-dot.active{background:#0D9CFF;border:3px solid #A0D8FF;box-shadow:0 0 0 3px rgba(13,156,255,.2)}\n.legend-dot.pending{background:#D1D5DB;border:2px solid #B0B7C0}\n.legend-dot.urgent{background:var(--hp-red);box-shadow:0 0 0 3px rgba(216,90,48,.2)}\n\n/* ═══ QUEUE BOARD ═══ */\n.queue-board{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:14px}\n.queue-col-header{font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;display:flex;align-items:center;gap:6px}\n.queue-col-header i{font-size:14px}\n.queue-card{background:var(--glass-bg);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:8px;cursor:pointer;transition:all .25s;display:flex;align-items:flex-start;gap:10px;box-shadow:var(--shadow-sm)}\n.queue-card:hover{border-color:rgba(13,124,107,.3);box-shadow:var(--shadow-md);transform:translateY(-3px) rotate(-0.5deg)}\n.queue-card.urgent-card{background:rgba(216,90,48,.05);border-color:rgba(216,90,48,.25)}\n.queue-card-num{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--hp-navy) 0%,var(--hp-navy2) 100%);color:#fff;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 10px rgba(11,31,58,.25)}\n.queue-card-num.u{background:linear-gradient(135deg,var(--hp-red) 0%,#c04a20 100%)}\n.queue-card-num.a{background:linear-gradient(135deg,var(--hp-teal-mid) 0%,var(--hp-teal) 100%)}\n.queue-card-body{flex:1;min-width:0}\n.queue-card-name{font-size:14px;font-weight:700;color:var(--text1)}\n.queue-card-meta{font-size:12px;color:var(--text2);margin-top:2px;font-weight:500}\n.queue-card-time{font-size:12px;color:var(--text2);margin-top:6px}\n\n/* ═══ NOW SERVING ═══ */\n.now-serving-banner{background:linear-gradient(135deg,var(--hp-teal) 0%,#0a6559 100%);color:#fff;padding:20px 24px;border-radius:14px;margin-bottom:16px;display:flex;align-items:center;gap:12px;box-shadow:0 12px 28px rgba(13,124,107,.35),inset 0 1px 0 rgba(255,255,255,.15)}\n.now-serving-pulse{width:14px;height:14px;border-radius:50%;background:#fff;animation:pulse-grow 2s infinite;box-shadow:0 0 0 0 rgba(255,255,255,.4)}\n@keyframes pulse-grow{0%,100%{transform:scale(1);opacity:1;box-shadow:0 0 0 0 rgba(255,255,255,.4)}50%{transform:scale(1.3);opacity:.6;box-shadow:0 0 0 6px rgba(255,255,255,0)}}\n.now-serving-text{font-size:14px;font-weight:700;opacity:.85}\n.now-serving-name{font-size:20px;font-weight:800;margin-left:auto;font-family:var(--display);font-style:italic}\n\n/* ═══ BILLING ═══ */\n.billing-cards-row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:18px}\n.billing-kpi-card{border-radius:var(--radius);padding:20px 22px;border:1px solid;backdrop-filter:blur(20px);box-shadow:var(--shadow-md);transition:all .25s;position:relative;overflow:hidden}\n.billing-kpi-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}\n.billing-kpi-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px}\n.billing-kpi-card.green{background:rgba(232,248,240,.85);border-color:rgba(127,212,173,.4)}.billing-kpi-card.green::before{background:linear-gradient(90deg,#2CAF7B,#5DCAA5)}\n.billing-kpi-card.amber{background:rgba(254,245,231,.85);border-color:rgba(232,184,107,.4)}.billing-kpi-card.amber::before{background:linear-gradient(90deg,#BA7517,#e8a01a)}\n.billing-kpi-card.red{background:rgba(250,236,231,.85);border-color:rgba(240,164,138,.4)}.billing-kpi-card.red::before{background:linear-gradient(90deg,#D85A30,#e87050)}\n.billing-kpi-label{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--text2);margin-bottom:10px}\n.billing-kpi-value{font-size:30px;font-weight:700;line-height:1;font-family:var(--display)}\n.billing-kpi-value.green{color:#0D6B46}.billing-kpi-value.amber{color:#8A5700}.billing-kpi-value.red{color:var(--hp-red)}\n.billing-kpi-sub{font-size:12px;color:var(--text2);margin-top:6px;font-weight:500}\n.bill-summary-row{display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid rgba(0,0,0,.05);font-size:13px}\n.bill-summary-row:last-child{border-bottom:none}\n.bill-status-bar{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px}\n.bill-status-chip{padding:8px 16px;border-radius:20px;font-size:13px;font-weight:700;cursor:pointer;border:1px solid var(--border);background:rgba(255,255,255,.6);color:var(--text2);transition:all .2s;backdrop-filter:blur(10px)}\n.bill-status-chip.active{background:linear-gradient(135deg,var(--hp-teal) 0%,var(--hp-teal-mid) 100%);color:#fff;border-color:transparent;box-shadow:0 6px 16px rgba(13,124,107,.3)}\n\n/* ═══ REPORTS ═══ */\n.report-card{background:var(--glass-bg);border:1px solid var(--border);border-radius:var(--radius);padding:18px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;gap:12px;box-shadow:var(--shadow-sm);transition:all .25s;backdrop-filter:blur(20px)}\n.report-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-md)}\n.report-card-left{display:flex;align-items:center;gap:12px}\n.report-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:var(--shadow-sm)}\n.report-icon.green{background:rgba(13,124,107,.1)}.report-icon.green i{color:var(--hp-teal)}\n.report-icon.blue{background:rgba(60,52,137,.08)}.report-icon.blue i{color:#3C3489}\n.report-icon.amber{background:rgba(186,117,23,.1)}.report-icon.amber i{color:var(--hp-amber)}\n.report-icon.red{background:rgba(216,90,48,.08)}.report-icon.red i{color:var(--hp-red)}\n.report-icon i{font-size:20px}\n.report-name{font-size:14px;font-weight:700;color:var(--text1)}\n.report-meta{font-size:13px;color:var(--text2);margin-top:2px;font-weight:500}\n.report-actions{display:flex;gap:8px}\n\n/* ═══ CHART ═══ */\n.chart-wrap{padding:14px 18px}\n.chart-bar-group{display:flex;align-items:flex-end;gap:5px;height:100px;margin-bottom:28px}\n.chart-bar{flex:1;border-radius:6px 6px 0 0;background:rgba(13,124,107,.15);transition:all .3s;cursor:pointer;position:relative;min-width:14px}\n.chart-bar:hover{background:linear-gradient(180deg,var(--hp-teal-light) 0%,var(--hp-teal) 100%);transform:scaleY(1.05);transform-origin:bottom}\n.chart-bar span{position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:9px;color:var(--text2);white-space:nowrap}\n.chart-labels{display:flex;gap:5px}\n.chart-label{flex:1;font-size:10px;color:var(--text2);text-align:center;min-width:14px;transform:rotate(-45deg);transform-origin:top center;margin-top:8px;white-space:nowrap}\n\n/* ═══ MODAL ═══ */\n.modal-overlay{position:fixed;inset:0;background:rgba(11,31,58,.5);backdrop-filter:blur(8px);z-index:100;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .25s}\n.modal-overlay.open{opacity:1;pointer-events:all}\n.modal{background:rgba(255,255,255,.9);backdrop-filter:blur(32px) saturate(200%);-webkit-backdrop-filter:blur(32px) saturate(200%);border-radius:20px;width:580px;max-width:95vw;max-height:88vh;overflow-y:auto;box-shadow:var(--shadow-xl);transform:scale(.94) translateY(20px);transition:all .25s;border:1px solid rgba(255,255,255,.8)}\n.modal-overlay.open .modal{transform:scale(1) translateY(0)}\n.modal-header{padding:20px 24px;border-bottom:1px solid var(--border2);display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.4)}\n.modal-title{font-family:var(--display);font-size:22px;font-weight:700;font-style:italic}\n.modal-close{width:32px;height:32px;border-radius:50%;background:rgba(0,0,0,.06);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--text2);transition:all .15s}\n.modal-close:hover{background:rgba(0,0,0,.1);transform:rotate(90deg)}\n.modal-body{padding:24px}\n.modal-footer{padding:16px 24px;border-top:1px solid var(--border2);display:flex;justify-content:flex-end;gap:8px;background:rgba(255,255,255,.4)}\n\n/* ═══ TABS ═══ */\n.tab-bar{display:flex;gap:3px;background:rgba(0,0,0,.06);border-radius:12px;padding:4px;margin-bottom:18px;width:fit-content;box-shadow:var(--neu-in)}\n.tab-btn{font-family:var(--font);font-size:13px;font-weight:700;padding:7px 18px;border-radius:9px;border:none;cursor:pointer;color:var(--text2);background:transparent;transition:all .2s}\n.tab-btn.active{background:white;color:var(--text1);box-shadow:0 3px 8px rgba(0,0,0,.1)}\n\n/* ═══ PATIENT PROFILE ═══ */\n.patient-profile-card{background:rgba(13,124,107,.06);border:1px solid rgba(13,124,107,.15);border-radius:var(--radius);padding:20px;display:flex;align-items:center;gap:18px;margin-bottom:14px;box-shadow:var(--shadow-sm)}\n.patient-big-avatar{width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#EEEDFE 0%,#d8d5fc 100%);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;color:#3C3489;flex-shrink:0;box-shadow:0 6px 16px rgba(60,52,137,.2),inset 0 1px 0 rgba(255,255,255,.8)}\n.patient-profile-name{font-size:18px;font-weight:800;color:var(--text1);font-family:var(--display);font-style:italic}\n.patient-profile-meta{font-size:13px;color:var(--text2);margin-top:4px;font-weight:500}\n.patient-profile-tags{display:flex;gap:6px;margin-top:8px;flex-wrap:wrap}\n\n/* ═══ LIVE DOT ═══ */\n@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}\n.live-dot{width:8px;height:8px;border-radius:50%;background:var(--hp-teal-light);display:inline-block;animation:pulse 2s infinite;margin-right:5px}\n\n/* ═══ HERO ═══ */\n.hero-panel{background:linear-gradient(135deg,rgba(11,31,58,.92) 0%,rgba(22,46,80,.92) 100%);backdrop-filter:blur(20px);border-radius:var(--radius);padding:28px;margin-bottom:18px;color:#fff;border-left:4px solid var(--hp-teal);box-shadow:var(--shadow-lg),inset 0 1px 0 rgba(255,255,255,.08)}\n.hero-title{font-family:var(--display);font-size:26px;font-weight:700;margin-bottom:8px;font-style:italic}\n.hero-content{font-size:15px;line-height:1.6;opacity:.85}\n.hero-cta{background:linear-gradient(135deg,var(--hp-teal) 0%,var(--hp-teal-mid) 100%);color:#fff;border:none;padding:13px 26px;border-radius:10px;font-family:var(--font);font-size:14px;font-weight:800;cursor:pointer;margin-top:18px;display:inline-flex;align-items:center;gap:8px;transition:all .2s;box-shadow:0 6px 18px rgba(13,124,107,.4);letter-spacing:.02em}\n.hero-cta:hover{transform:translateY(-3px);box-shadow:0 10px 26px rgba(13,124,107,.5)}\n.hero-cta i{font-size:18px}\n\n/* ═══ TASK LIST ═══ */\n.task-list{display:flex;flex-direction:column;gap:7px;margin-top:14px}\n.task-item{background:rgba(255,255,255,.1);border-radius:8px;padding:10px 14px;font-size:13px;display:flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.1)}\n.task-item i{font-size:15px}\n\n/* ═══ TIMELINE ═══ */\n.timeline{display:flex;flex-direction:column;gap:0}\n.timeline-item{display:flex;gap:12px;padding:12px 10px;border-bottom:1px solid rgba(0,0,0,.05);cursor:pointer;transition:all .18s;border-radius:10px;margin:1px 0}\n.timeline-item:hover{background:rgba(255,255,255,.6);box-shadow:var(--shadow-sm);transform:translateX(4px)}\n.timeline-time{font-size:12px;font-weight:800;color:var(--text2);width:54px;flex-shrink:0;padding-top:2px}\n.timeline-content{flex:1;min-width:0}\n.timeline-name{font-size:14px;font-weight:700;color:var(--text1);margin-bottom:3px}\n.timeline-detail{font-size:13px;color:var(--text2);display:flex;align-items:center;gap:6px;flex-wrap:wrap;font-weight:500}\n.expand-hint{font-size:11px;color:var(--hp-teal);margin-top:4px;font-weight:600}\n\n/* ═══ EMR / VITALS ═══ */\n.emr-panel{background:rgba(255,255,255,.55);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:10px;box-shadow:var(--shadow-sm);transition:all .2s}\n.emr-panel:hover{box-shadow:var(--shadow-md);transform:translateY(-2px)}\n.emr-section-title{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--hp-teal);margin-bottom:10px}\n.vitals-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:8px}\n.vitals-item{background:rgba(255,255,255,.6);border-radius:10px;padding:10px 8px;text-align:center;border:1px solid var(--border);box-shadow:var(--shadow-sm)}\n.vitals-label{font-size:10px;text-transform:uppercase;color:var(--text2);margin-bottom:4px;font-weight:800;letter-spacing:.06em}\n.vitals-value{font-size:16px;font-weight:800;color:var(--text1);font-family:var(--display)}\n.inline-form{background:rgba(255,255,255,.5);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:12px;box-shadow:var(--shadow-sm)}\n\n/* ═══ CONSULT NOTES ═══ */\n.consult-note-card{background:var(--glass-bg);border:1px solid var(--border);border-radius:var(--radius);padding:18px;margin-bottom:12px;box-shadow:var(--shadow-sm);transition:all .25s;backdrop-filter:blur(20px)}\n.consult-note-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-md)}\n.consult-note-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}\n.consult-note-patient{font-size:15px;font-weight:800;color:var(--text1)}\n.consult-note-meta{font-size:12px;color:var(--text2);margin-top:2px;font-weight:500}\n.consult-note-body{font-size:14px;color:var(--text1);line-height:1.65;background:rgba(255,255,255,.5);border-radius:8px;padding:12px;white-space:pre-wrap}\n.consult-note-date{font-size:12px;color:var(--text2);margin-top:8px}\n\n/* ═══ AUDIT PAGE ═══ */\n.audit-summary-bar{display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap}\n.audit-count-chip{display:flex;align-items:center;gap:10px;padding:12px 20px;border-radius:12px;font-size:14px;font-weight:700;border:1px solid;backdrop-filter:blur(20px);box-shadow:var(--shadow-sm)}\n.audit-count-chip.critical{background:rgba(250,236,231,.8);color:#7A1E06;border-color:rgba(240,164,138,.4)}\n.audit-count-chip.major{background:rgba(254,245,231,.8);color:#633806;border-color:rgba(245,216,154,.4)}\n.audit-count-chip.minor{background:rgba(255,255,255,.6);color:var(--text2);border-color:var(--border)}\n.audit-count-chip .chip-num{font-size:28px;line-height:1;font-family:var(--display);font-style:italic}\n.audit-count-chip .chip-label{font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;opacity:.8}\n.audit-filter-bar{display:flex;gap:6px;margin-bottom:20px;flex-wrap:wrap}\n.audit-filter-btn{padding:8px 18px;border-radius:20px;font-size:13px;font-weight:700;cursor:pointer;border:1px solid var(--border);background:rgba(255,255,255,.6);color:var(--text2);transition:all .2s;font-family:var(--font);backdrop-filter:blur(10px)}\n.audit-filter-btn:hover:not(.active){background:rgba(255,255,255,.85);transform:translateY(-1px)}\n.audit-filter-btn.active{background:var(--hp-navy);color:#fff;border-color:var(--hp-navy);box-shadow:0 6px 16px rgba(11,31,58,.25)}\n.audit-filter-btn.sev-critical.active{background:linear-gradient(135deg,#D85A30 0%,#c04a20 100%);border-color:transparent;box-shadow:0 6px 16px rgba(216,90,48,.3)}\n.audit-filter-btn.sev-major.active{background:linear-gradient(135deg,#BA7517 0%,#a06410 100%);border-color:transparent}\n.audit-filter-btn.sev-minor.active{background:linear-gradient(135deg,#6B7280 0%,#5a6170 100%);border-color:transparent}\n.audit-card{background:var(--glass-bg);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:12px;overflow:hidden;transition:all .2s;backdrop-filter:blur(20px);box-shadow:var(--shadow-sm)}\n.audit-card:hover{box-shadow:var(--shadow-md);transform:translateY(-2px)}\n.audit-card-header{display:flex;align-items:flex-start;gap:14px;padding:18px 20px;cursor:pointer;user-select:none}\n.audit-sev-pill{flex-shrink:0;font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:4px 10px;border-radius:20px;margin-top:2px}\n.audit-sev-pill.critical{background:rgba(216,90,48,.12);color:#7A1E06}\n.audit-sev-pill.major{background:rgba(186,117,23,.12);color:#633806}\n.audit-sev-pill.minor{background:rgba(107,114,128,.1);color:var(--text2)}\n.audit-card-title{font-size:15px;font-weight:700;color:var(--text1);line-height:1.35;flex:1}\n.audit-card-expand-icon{flex-shrink:0;font-size:18px;color:var(--text2);margin-top:2px;transition:transform .2s}\n.audit-card.open .audit-card-expand-icon{transform:rotate(180deg)}\n.audit-card-body{display:none;padding:0 20px 20px;border-top:1px solid var(--border2);margin-top:0}\n.audit-card.open .audit-card-body{display:block}\n.audit-issue-text{font-size:14px;color:var(--text1);line-height:1.65;margin-top:14px}\n.audit-rec-box{background:rgba(13,124,107,.06);border-left:3px solid var(--hp-teal);border-radius:0 10px 10px 0;padding:14px 16px;margin-top:14px}\n.audit-rec-label{font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--hp-teal);margin-bottom:6px}\n.audit-rec-text{font-size:13px;color:var(--text1);line-height:1.65}\n.audit-section-header{font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--text2);margin:24px 0 12px;padding-bottom:8px;border-bottom:1.5px solid rgba(0,0,0,.08)}\n\n/* ═══ TOAST ═══ */\n#toast{position:fixed;bottom:28px;right:28px;background:rgba(11,31,58,.92);backdrop-filter:blur(20px);color:#fff;padding:14px 22px;border-radius:14px;font-size:14px;font-weight:600;opacity:0;transform:translateY(10px);pointer-events:none;transition:all .3s;z-index:500;max-width:380px;border:1px solid rgba(255,255,255,.1);box-shadow:0 16px 36px rgba(0,0,0,.3)}\n\n/* ═══ PATIENT FULL PAGE PROFILE (Doctor) ═══ */\n.patient-page-hero{background:linear-gradient(135deg,rgba(11,31,58,.9) 0%,rgba(22,46,80,.9) 100%);backdrop-filter:blur(24px);border-radius:20px;padding:28px 32px;margin-bottom:20px;color:#fff;box-shadow:var(--shadow-xl),inset 0 1px 0 rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08);position:relative;overflow:hidden}\n.patient-page-hero::before{content:'';position:absolute;top:-40%;right:-10%;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(13,124,107,.2) 0%,transparent 70%);pointer-events:none}\n.patient-page-hero::after{content:'';position:absolute;bottom:-60%;left:-5%;width:250px;height:250px;border-radius:50%;background:radial-gradient(circle,rgba(93,202,165,.08) 0%,transparent 70%);pointer-events:none}\n.patient-page-avatar{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#e0dffe 0%,#c8c5f8 100%);display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:800;color:#3C3489;flex-shrink:0;border:3px solid rgba(255,255,255,.3);box-shadow:0 8px 24px rgba(60,52,137,.3),inset 0 1px 0 rgba(255,255,255,.8)}\n.patient-page-name{font-family:var(--display);font-size:28px;font-weight:700;font-style:italic;margin-bottom:6px}\n.patient-page-meta{font-size:14px;opacity:.75;font-weight:500;margin-bottom:10px}\n.patient-page-tags{display:flex;gap:8px;flex-wrap:wrap}\n.patient-page-back-btn{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;padding:8px 16px;border-radius:10px;font-family:var(--font);font-size:13px;font-weight:700;cursor:pointer;transition:all .2s;margin-bottom:16px}\n.patient-page-back-btn:hover{background:rgba(255,255,255,.18);transform:translateX(-3px)}\n.patient-page-sections{display:grid;grid-template-columns:1fr 1fr;gap:16px}\n.patient-page-section-wide{grid-column:1/-1}\n.pp-card{background:var(--glass-bg);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border:1px solid var(--border);border-radius:16px;overflow:hidden;box-shadow:var(--shadow-md);transition:all .25s}\n.pp-card:hover{box-shadow:var(--shadow-lg);transform:translateY(-3px)}\n.pp-card-header{padding:14px 18px;border-bottom:1px solid var(--border2);background:rgba(255,255,255,.5);display:flex;align-items:center;justify-content:space-between}\n.pp-card-title{font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--hp-teal);display:flex;align-items:center;gap:7px}\n.pp-card-title i{font-size:15px}\n.pp-card-body{padding:16px 18px}\n\n/* ═══ FLOATING CARD EFFECT ═══ */\n@keyframes floatUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}\n.page.active>.content-header,.page.active>.stats-grid,.page.active>.panel,.page.active>.hero-panel,.page.active>.two-col,.page.active>.billing-cards-row,.page.active>.filter-chips,.page.active>.search-wrap,.page.active>.now-serving-banner,.page.active>.patient-page-hero,.page.active>.patient-page-sections,.page.active>.patient-page-back-btn{animation:floatUp .3s ease both}\n"
    }}
  />
  {/* LOGIN */}
  <div className="login-container" id="login-screen">
    <div className="login-card">
      <div className="login-header">
        <div className="login-logo">
          {/* HP medical cross logo */}
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <rect x={13} y={4} width={6} height={24} rx={2} fill="white" />
            <rect x={4} y={13} width={24} height={6} rx={2} fill="white" />
            <circle
              cx={16}
              cy={16}
              r={4}
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className="login-brand">
          <span className="login-brand-hi">Hi-</span>
          <span className="login-brand-precision">Precision</span>
          <span className="login-brand-sub">Diagnostics</span>
        </div>
        <div className="login-sub">Patient Management System</div>
      </div>
      <form className="login-form" onsubmit="handleLogin(event)">
        <div className="login-input-group">
          <label className="login-label">Email</label>
          <input
            type="email"
            className="login-input"
            id="login-username"
            placeholder="Enter your email"
            required=""
            autoComplete="username"
          />
        </div>
        <div className="login-input-group">
          <label className="login-label">Password</label>
          <div className="login-input-wrap">
            <input
              type="password"
              className="login-input"
              id="login-password"
              placeholder="Enter your password"
              required=""
              autoComplete="current-password"
            />
            <button
              type="button"
              className="toggle-password"
              onclick="togglePassword()"
              title="Show/hide password"
            >
              <i className="ti ti-eye" id="password-icon" />
            </button>
          </div>
        </div>
        <div className="login-error" id="login-error">
          Invalid username or password.
        </div>
        <button type="submit" className="login-btn">
          Sign In
        </button>
      </form>
    </div>
  </div>
  {/* TOPBAR */}
  <div className="topbar" style={{ display: "none" }} id="topbar">
    <div className="topbar-brand">
      <div className="topbar-logo">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <rect x={13} y={4} width={6} height={24} rx={2} fill="white" />
          <rect x={4} y={13} width={24} height={6} rx={2} fill="white" />
        </svg>
      </div>
      <div className="topbar-name">
        <span className="hi">Hi-</span>Precision
        <span className="tagline">Diagnostics · PMS</span>
      </div>
    </div>
    <div className="topbar-user">
      <div className="user-avatar" id="user-initials">
        MR
      </div>
      <div className="user-name" id="user-label">
        Maria Reyes · Front Desk
      </div>
    </div>
  </div>
  <div className="main" style={{ display: "none" }} id="main-app">
    <div className="sidebar" id="sidebar" />
    <div className="content" id="content">
      {/* DASHBOARD FRONTDESK — no billing summary */}
      <div className="page active" id="page-dashboard-frontdesk">
        <div className="content-header">
          <div>
            <div className="content-title">Dashboard</div>
            <div className="content-sub" id="fd-date-sub">
              Monday, May 18, 2026 · Sampaloc, Manila
            </div>
          </div>
        </div>
        <div className="hero-panel" id="fd-hero">
          <div className="hero-title">
            <span className="live-dot" />
            Live Queue — <span id="fd-queue-count">11</span> Patients Waiting
          </div>
          <div className="hero-content" id="fd-serving-text">
            Currently serving: <strong>Santos, Ana M.</strong> (#1) · CBC +
            Urinalysis · Dr. Cruz
          </div>
          <button className="hero-cta" onclick="navigateTo('queue')">
            <i className="ti ti-layout-list" /> Manage Queue
          </button>
        </div>
        <div style={{ marginBottom: 16 }}>
          <button
            className="btn-primary"
            style={{
              width: "100%",
              justifyContent: "center",
              padding: "14px 24px",
              fontSize: 16
            }}
            onclick="navigateTo('registration')"
          >
            <i className="ti ti-user-plus" style={{ fontSize: 20 }} /> Register
            New Patient
          </button>
        </div>
        <div className="stats-grid" id="fd-stats" />
        {/* Today's appointments full width */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <i className="ti ti-calendar" /> Today's Appointments
            </div>
            <button
              className="panel-action"
              onclick="navigateTo('appointments')"
            >
              View all &amp; Schedule new →
            </button>
          </div>
          <div id="fd-appt-list" />
        </div>
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <i className="ti ti-list" /> Recent Patients
            </div>
            <button className="panel-action" onclick="navigateTo('patients')">
              View all →
            </button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Service</th>
                <th>Doctor</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody id="fd-recent-patients" />
          </table>
        </div>
      </div>
      {/* DASHBOARD NURSE */}
      <div className="page" id="page-dashboard-nurse">
        <div className="content-header">
          <div>
            <div className="content-title">Dashboard</div>
            <div className="content-sub">
              Monday, May 18, 2026 · Sampaloc, Manila
            </div>
          </div>
        </div>
        <div className="hero-panel" id="nurse-hero">
          <div className="hero-title">Active Patient</div>
          <div className="hero-content" id="nurse-active-patient">
            No active patient
          </div>
          <div className="task-list" id="nurse-tasks" />
        </div>
        <div className="stats-grid" id="nurse-stats" />
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <i className="ti ti-layout-list" /> Upcoming Patients
            </div>
            <button className="panel-action" onclick="navigateTo('queue')">
              View full queue →
            </button>
          </div>
          <div className="queue-list" id="nurse-queue-list" />
        </div>
      </div>
      {/* DASHBOARD DOCTOR */}
      <div className="page" id="page-dashboard-doctor">
        <div className="content-header">
          <div>
            <div className="content-title">Dashboard</div>
            <div className="content-sub">
              Monday, May 18, 2026 · Sampaloc, Manila
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-title">Today's Schedule</div>
          <div className="hero-content" id="doc-hero-content">
            Loading schedule...
          </div>
        </div>
        <div className="stats-grid" id="doc-stats" />
        <div className="two-col-equal">
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <i className="ti ti-calendar-event" /> Today's Timeline
              </div>
              <span
                style={{ fontSize: 12, color: "var(--text2)" }}
                id="doc-timeline-count"
              />
            </div>
            <div
              className="timeline"
              id="doc-timeline"
              style={{ padding: 8 }}
            />
          </div>
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <i className="ti ti-microscope" /> Lab Results for Review
              </div>
              <span className="badge badge-urgent" id="doc-lab-badge">
                0
              </span>
            </div>
            <div style={{ padding: 16 }} id="doc-lab-results" />
          </div>
        </div>
      </div>
      {/* PATIENTS PAGE */}
      <div className="page" id="page-patients">
        <div className="content-header">
          <div>
            <div className="content-title">Patients</div>
            <div className="content-sub" id="patients-sub">
              All registered patients
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              className="btn-secondary"
              onclick="openModal('export-modal')"
              title="Export patient records"
            >
              <i className="ti ti-download" /> Export
            </button>
            <button
              className="btn-primary"
              onclick="navigateTo('registration')"
            >
              <i className="ti ti-user-plus" /> Register New
            </button>
          </div>
        </div>
        <div style={{ marginBottom: 14 }}>
          <div className="search-wrap" style={{ padding: "12px 16px" }}>
            <i className="ti ti-search" style={{ fontSize: 18 }} />
            <input
              type="text"
              id="patient-search"
              placeholder="Search by name, ID, or phone number…"
              style={{ fontSize: 15 }}
              oninput="filterPatientsTable()"
            />
          </div>
        </div>
        <div className="filter-chips" id="patient-status-chips">
          <div
            className="filter-chip active"
            onclick="setPatientChip(this,'all')"
          >
            All
          </div>
          <div
            className="filter-chip"
            onclick="setPatientChip(this,'In Progress')"
          >
            Active
          </div>
          <div className="filter-chip" onclick="setPatientChip(this,'Waiting')">
            Waiting
          </div>
          <div className="filter-chip" onclick="setPatientChip(this,'Done')">
            Done
          </div>
          <div className="filter-chip" onclick="setPatientChip(this,'Urgent')">
            Urgent
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <select
            className="filter-select"
            id="patient-service-filter"
            onchange="filterPatientsTable()"
          >
            <option value="">All Services</option>
            <option>Laboratory</option>
            <option>Imaging</option>
            <option>Cardiology</option>
            <option>OB-Gyne</option>
            <option>Consultation</option>
          </select>
          <select
            className="filter-select"
            id="patient-doctor-filter"
            onchange="filterPatientsTable()"
          >
            <option value="">All Doctors</option>
            <option>Dr. Cruz</option>
            <option>Dr. Ramos</option>
            <option>Dr. Reyes</option>
            <option>Dr. Lim</option>
            <option>Dr. Santos</option>
          </select>
        </div>
        <div className="stats-grid" id="patients-stats" />
        <div
          style={{
            padding: "8px 12px",
            background: "var(--bg3)",
            borderRadius: "8px 8px 0 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <span
            style={{ fontSize: 13, color: "var(--text2)" }}
            id="patients-count-top"
          >
            Loading...
          </span>
          <div
            id="patients-pagination-top"
            style={{ display: "flex", gap: 4 }}
          />
        </div>
        <div
          className="panel"
          style={{ marginTop: 0, borderRadius: "0 0 8px 8px" }}
        >
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Full Name</th>
                <th>Age / Sex</th>
                <th>Contact</th>
                <th>Service</th>
                <th>Doctor</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="patients-table-body" />
          </table>
          <div
            style={{
              padding: "10px 16px",
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <span
              style={{ fontSize: 13, color: "var(--text2)" }}
              id="patients-count-bottom"
            >
              Loading...
            </span>
            <div
              id="patients-pagination-bottom"
              style={{ display: "flex", gap: 4 }}
            />
          </div>
        </div>
      </div>
      {/* APPOINTMENTS PAGE */}
      <div className="page" id="page-appointments">
        <div className="content-header">
          <div>
            <div className="content-title">Appointments</div>
            <div className="content-sub">Schedule management · May 2026</div>
          </div>
          <button
            className="btn-primary"
            style={{ padding: "12px 20px", fontSize: 15 }}
            onclick="openModal('appt-modal')"
          >
            <i className="ti ti-plus" /> New Appointment
          </button>
        </div>
        {/* Improved legend */}
        <div className="color-legend">
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: ".08em",
              color: "var(--text2)",
              marginRight: 4
            }}
          >
            Status:
          </span>
          <div className="legend-item">
            <div className="legend-dot done" /> Done
          </div>
          <div className="legend-item">
            <div className="legend-dot active" /> Active / In Progress
          </div>
          <div className="legend-item">
            <div className="legend-dot pending" /> Pending / Waiting
          </div>
          <div className="legend-item">
            <div className="legend-dot urgent" /> Urgent
          </div>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 12 }}
        >
          <div>
            <div className="panel">
              <div className="panel-header">
                <div className="panel-title">
                  <i className="ti ti-calendar-event" />{" "}
                  <span id="appt-day-title">May 18 — Today's Schedule</span>
                </div>
                <span
                  style={{ fontSize: 12, color: "var(--text2)" }}
                  id="appt-day-count"
                />
              </div>
              <div id="appt-day-list" />
            </div>
            <div className="panel">
              <div className="panel-header">
                <div className="panel-title">
                  <i className="ti ti-clock" /> Upcoming This Week
                </div>
                <span
                  style={{ fontSize: 12, color: "var(--text2)" }}
                  id="appt-week-count"
                />
              </div>
              <div id="appt-week-list" />
            </div>
          </div>
          <div>
            <div className="panel">
              <div className="panel-header">
                <button
                  className="btn-secondary"
                  style={{ padding: "4px 10px", fontSize: 12 }}
                  onclick="changeCalMonth(-1)"
                  title="Previous month"
                >
                  <i className="ti ti-chevron-left" />
                </button>
                <div
                  className="panel-title"
                  style={{ justifyContent: "center" }}
                >
                  <i className="ti ti-calendar" />{" "}
                  <span id="cal-month-label">May 2026</span>
                </div>
                <button
                  className="btn-secondary"
                  style={{ padding: "4px 10px", fontSize: 12 }}
                  onclick="changeCalMonth(1)"
                  title="Next month"
                >
                  <i className="ti ti-chevron-right" />
                </button>
              </div>
              <div className="cal-grid" id="cal-grid" />
            </div>
          </div>
        </div>
      </div>
      {/* QUEUE PAGE */}
      <div className="page" id="page-queue">
        <div className="content-header">
          <div>
            <div className="content-title">Queue Management</div>
            <div className="content-sub">
              <span className="live-dot" />
              Live · <span id="q-total">0</span> patients in system · Avg wait
              18 min
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              className="btn-secondary"
              title="Print Queue"
              onclick="window.print()"
            >
              <i className="ti ti-printer" /> Print Queue
            </button>
            <button className="btn-primary" onclick="openModal('appt-modal')">
              <i className="ti ti-user-plus" /> Add to Queue
            </button>
          </div>
        </div>
        <div className="now-serving-banner" id="now-serving-banner">
          <div className="now-serving-pulse" />
          <div className="now-serving-text">Now Serving</div>
          <div className="now-serving-name" id="now-serving-name">
            #1 Santos, Ana M.
          </div>
        </div>
        <div className="stats-grid" id="queue-stats" />
        <div className="queue-board" id="queue-board" />
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <i className="ti ti-table" /> Full Queue List
            </div>
            <button
              className="btn-secondary"
              style={{ padding: "6px 12px", fontSize: 13 }}
              title="Refresh queue"
              onclick="renderAll()"
            >
              <i className="ti ti-refresh" /> Refresh
            </button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient</th>
                <th>Service</th>
                <th>Doctor</th>
                <th>Wait Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="queue-table-body" />
          </table>
        </div>
      </div>
      {/* REGISTRATION PAGE */}
      <div className="page" id="page-registration">
        <div className="content-header">
          <div>
            <div className="content-title">Patient Registration</div>
            <div className="content-sub">Register a new patient or walk-in</div>
          </div>
          <button className="btn-secondary" onclick="navigateTo('patients')">
            <i className="ti ti-arrow-left" /> Back to Patients
          </button>
        </div>
        <div className="wizard-progress">
          <div className="wizard-step active" id="step-indicator-1">
            <div className="wizard-step-num">1</div>
            <div className="wizard-step-label">Personal Info</div>
          </div>
          <div className="wizard-step" id="step-indicator-2">
            <div className="wizard-step-num">2</div>
            <div className="wizard-step-label">Contact &amp; Insurance</div>
          </div>
          <div className="wizard-step" id="step-indicator-3">
            <div className="wizard-step-num">3</div>
            <div className="wizard-step-label">Visit &amp; Consent</div>
          </div>
        </div>
        <div className="panel">
          <div id="wizard-step-1">
            <div className="panel-header">
              <div className="panel-title">
                <i className="ti ti-user" /> Step 1: Personal Information
              </div>
            </div>
            <div style={{ padding: 20 }}>
              <div className="form-section">Basic Information</div>
              <div className="form-grid">
                <div className="form-group required">
                  <label className="form-label">
                    Last Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    id="reg-lastname"
                    placeholder="e.g. Santos"
                  />
                </div>
                <div className="form-group required">
                  <label className="form-label">
                    First Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    id="reg-firstname"
                    placeholder="e.g. Ana Marie"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Middle Name</label>
                  <input
                    type="text"
                    className="form-input"
                    id="reg-middlename"
                    placeholder="Optional"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Suffix</label>
                  <select className="form-select" id="reg-suffix">
                    <option>None</option>
                    <option>Jr.</option>
                    <option>Sr.</option>
                    <option>III</option>
                  </select>
                </div>
                <div className="form-group required">
                  <label className="form-label">
                    Date of Birth <span>*</span>
                  </label>
                  <input type="date" className="form-input" id="reg-dob" />
                </div>
                <div className="form-group required">
                  <label className="form-label">
                    Sex <span>*</span>
                  </label>
                  <select className="form-select" id="reg-sex">
                    <option value="">-- Select --</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Civil Status</label>
                  <select className="form-select" id="reg-civil">
                    <option>Single</option>
                    <option>Married</option>
                    <option>Widowed</option>
                    <option>Separated</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Nationality</label>
                  <input
                    type="text"
                    className="form-input"
                    id="reg-nationality"
                    defaultValue="Filipino"
                  />
                </div>
              </div>
              <div className="wizard-actions">
                <button className="btn-primary" onclick="nextStep(1)">
                  Next <i className="ti ti-arrow-right" />
                </button>
              </div>
            </div>
          </div>
          <div id="wizard-step-2" style={{ display: "none" }}>
            <div className="panel-header">
              <div className="panel-title">
                <i className="ti ti-phone" /> Step 2: Contact &amp; Insurance
              </div>
            </div>
            <div style={{ padding: 20 }}>
              <div className="form-section">Contact Information</div>
              <div className="form-grid">
                <div className="form-group required">
                  <label className="form-label">
                    Mobile Number <span>*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-input"
                    id="reg-mobile"
                    placeholder="09XX-XXX-XXXX"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    id="reg-email"
                    placeholder="patient@email.com"
                  />
                </div>
                <div className="form-group full required">
                  <label className="form-label">
                    Home Address <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    id="reg-address"
                    placeholder="Street, Barangay, City, Province"
                  />
                </div>
              </div>
              <div className="form-section">Emergency Contact</div>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Contact Person</label>
                  <input
                    type="text"
                    className="form-input"
                    id="reg-emergency-name"
                    placeholder="Full name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Relationship</label>
                  <input
                    type="text"
                    className="form-input"
                    id="reg-emergency-rel"
                    placeholder="e.g. Spouse, Parent"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Number</label>
                  <input
                    type="tel"
                    className="form-input"
                    id="reg-emergency-phone"
                    placeholder="09XX-XXX-XXXX"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Senior / PWD</label>
                  <select className="form-select" id="reg-discount">
                    <option>No</option>
                    <option>Senior Citizen</option>
                    <option>PWD</option>
                  </select>
                </div>
              </div>
              <div className="form-section">Insurance / HMO</div>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">HMO Provider</label>
                  <select className="form-select" id="reg-hmo">
                    <option>None / Walk-in</option>
                    <option>PhilHealth</option>
                    <option>Maxicare</option>
                    <option>MediCard</option>
                    <option>Intellicare</option>
                    <option>EastWest</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">HMO Card Number</label>
                  <input
                    type="text"
                    className="form-input"
                    id="reg-hmo-card"
                    placeholder="Card or LOA number"
                  />
                </div>
              </div>
              <div className="wizard-actions">
                <button className="btn-secondary" onclick="prevStep(2)">
                  <i className="ti ti-arrow-left" /> Back
                </button>
                <button className="btn-primary" onclick="nextStep(2)">
                  Next <i className="ti ti-arrow-right" />
                </button>
              </div>
            </div>
          </div>
          <div id="wizard-step-3" style={{ display: "none" }}>
            <div className="panel-header">
              <div className="panel-title">
                <i className="ti ti-stethoscope" /> Step 3: Visit Details &amp;
                Consent
              </div>
            </div>
            <div style={{ padding: 20 }}>
              <div className="form-section">Service Request</div>
              <div className="form-group required" style={{ marginBottom: 12 }}>
                <label className="form-label">
                  Service Type <span>*</span>
                </label>
                <select className="form-select" id="reg-service">
                  <option value="">-- Select Service --</option>
                  <optgroup label="Laboratory">
                    <option>CBC (Complete Blood Count)</option>
                    <option>Urinalysis</option>
                    <option>Blood Chemistry Panel</option>
                    <option>Blood Typing</option>
                  </optgroup>
                  <optgroup label="Imaging">
                    <option>Chest X-Ray</option>
                    <option>CT-Scan</option>
                    <option>Digital Mammography</option>
                    <option>Ultrasound</option>
                  </optgroup>
                  <optgroup label="Cardiology">
                    <option>ECG</option>
                    <option>Echocardiography</option>
                    <option>Treadmill Stress Test</option>
                    <option>Holter Monitoring</option>
                  </optgroup>
                  <optgroup label="Consultation">
                    <option>Multi-Specialty Consultation</option>
                    <option>Pre-employment Medical</option>
                    <option>Pre-operative Clearance</option>
                  </optgroup>
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: 12 }}>
                <label className="form-label">Requesting Doctor</label>
                <select className="form-select" id="reg-doctor">
                  <option>-- Walk-in (no referral) --</option>
                  <option>Dr. Cruz</option>
                  <option>Dr. Ramos</option>
                  <option>Dr. Reyes</option>
                  <option>Dr. Lim</option>
                  <option>Dr. Santos</option>
                </select>
              </div>
              <div className="form-grid">
                <div className="form-group required">
                  <label className="form-label">
                    Appointment Date <span>*</span>
                  </label>
                  <input
                    type="date"
                    className="form-input"
                    id="reg-appt-date"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Preferred Time</label>
                  <select className="form-select" id="reg-appt-time">
                    <option>Walk-in / ASAP</option>
                    <option>8:00 AM</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                  </select>
                </div>
              </div>
              <div
                className="form-group"
                style={{ marginBottom: 12, marginTop: 12 }}
              >
                <label className="form-label">Chief Complaint / Remarks</label>
                <textarea
                  className="form-textarea"
                  id="reg-complaint"
                  placeholder="Briefly describe symptoms or reason for visit…"
                  defaultValue={""}
                />
              </div>
              <div className="form-section">Payment</div>
              <div className="form-group" style={{ marginBottom: 16 }}>
                <label className="form-label">Payment Method</label>
                <select className="form-select" id="reg-payment">
                  <option>Cash</option>
                  <option>GCash / Maya</option>
                  <option>Credit Card</option>
                  <option>HMO / Insurance</option>
                  <option>PhilHealth Only</option>
                </select>
              </div>
              <div
                className="summary-card"
                id="reg-summary-card"
                style={{ display: "none" }}
              >
                <div className="summary-title">Registration Summary</div>
                <div className="summary-row">
                  <div className="summary-label">Patient Name</div>
                  <div className="summary-value" id="sum-name">
                    —
                  </div>
                </div>
                <div className="summary-row">
                  <div className="summary-label">Date of Birth</div>
                  <div className="summary-value" id="sum-dob">
                    —
                  </div>
                </div>
                <div className="summary-row">
                  <div className="summary-label">Contact</div>
                  <div className="summary-value" id="sum-contact">
                    —
                  </div>
                </div>
                <div className="summary-row">
                  <div className="summary-label">Service</div>
                  <div className="summary-value" id="sum-service">
                    —
                  </div>
                </div>
                <div className="summary-row">
                  <div className="summary-label">Appointment</div>
                  <div className="summary-value" id="sum-appt">
                    —
                  </div>
                </div>
              </div>
              <div className="consent-box">
                <div className="consent-box-content">
                  By registering, the patient consents to Hi-Precision
                  Diagnostics collecting, storing, and processing their personal
                  and medical information in accordance with the{" "}
                  <strong>Data Privacy Act of 2012 (RA 10173)</strong>.
                  Information will be used solely for medical, billing, and
                  administrative purposes.
                </div>
                <div className="consent-checkbox">
                  <input type="checkbox" id="consent-check" />
                  <label htmlFor="consent-check">
                    Patient (or guardian) has verbally confirmed consent and
                    understands the data privacy notice above.
                  </label>
                </div>
              </div>
              <div className="wizard-actions">
                <button className="btn-secondary" onclick="prevStep(3)">
                  <i className="ti ti-arrow-left" /> Back
                </button>
                <button className="btn-primary" onclick="submitRegistration()">
                  <i className="ti ti-check" /> Register &amp; Add to Queue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BILLING PAGE — separated KPI cards */}
      <div className="page" id="page-billing">
        <div className="content-header">
          <div>
            <div className="content-title">Billing &amp; Payments</div>
            <div className="content-sub">
              Manage invoices and collections · May 18, 2026
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn-secondary" title="Export billing data">
              <i className="ti ti-download" /> Export
            </button>
            <button
              className="btn-primary"
              onclick="openModal('billing-modal')"
            >
              <i className="ti ti-receipt" /> New Invoice
            </button>
          </div>
        </div>
        {/* Separated billing KPI cards */}
        <div className="billing-cards-row" id="billing-kpi-cards" />
        <div className="stats-grid" id="billing-stats" />
        <div className="bill-status-bar" id="billing-chips">
          <div
            className="bill-status-chip active"
            onclick="setBillingChip(this,'all')"
          >
            All
          </div>
          <div
            className="bill-status-chip"
            onclick="setBillingChip(this,'Paid')"
          >
            Paid
          </div>
          <div
            className="bill-status-chip"
            onclick="setBillingChip(this,'Pending')"
          >
            Pending
          </div>
          <div
            className="bill-status-chip"
            onclick="setBillingChip(this,'HMO')"
          >
            HMO
          </div>
          <div
            className="bill-status-chip"
            onclick="setBillingChip(this,'Overdue')"
          >
            Overdue
          </div>
        </div>
        <div style={{ marginBottom: 14 }}>
          <div className="search-wrap" style={{ padding: "10px 14px" }}>
            <i className="ti ti-search" style={{ fontSize: 16 }} />
            <input
              type="text"
              id="billing-search"
              placeholder="Search patient name or invoice number…"
              style={{ fontSize: 14 }}
              oninput="renderBillingTable()"
            />
          </div>
        </div>
        <div className="panel">
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Service</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
                <th>Invoice #</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="billing-table-body" />
          </table>
          <div
            style={{
              padding: "10px 16px",
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <span
              style={{ fontSize: 13, color: "var(--text2)" }}
              id="billing-count"
            >
              Loading...
            </span>
            <div id="billing-pagination" style={{ display: "flex", gap: 4 }} />
          </div>
        </div>
      </div>
      {/* REPORTS PAGE */}
      <div className="page" id="page-reports">
        <div className="content-header">
          <div>
            <div className="content-title">Reports &amp; Analytics</div>
            <div className="content-sub">
              Generate and download operational reports
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <select className="filter-select" style={{ fontSize: 13 }}>
              <option>Today</option>
              <option>This Week</option>
              <option selected="">This Month</option>
              <option>Custom Range</option>
            </select>
            <button
              className="btn-primary"
              title="Export all reports"
              onclick="showToast('Exporting all reports…')"
            >
              <i className="ti ti-download" /> Export All
            </button>
          </div>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Monthly Patients</div>
            <div className="stat-value">1,204</div>
            <div className="stat-delta up">
              <i className="ti ti-trending-up" /> +9% vs last month
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Monthly Revenue</div>
            <div className="stat-value">₱384K</div>
            <div className="stat-delta up">
              <i className="ti ti-trending-up" /> +14% growth
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Lab Tests Done</div>
            <div className="stat-value">876</div>
            <div className="stat-delta up">
              <i className="ti ti-flask" /> 72% of services
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Avg Wait Time</div>
            <div className="stat-value">21 min</div>
            <div className="stat-delta up">
              <i className="ti ti-clock" /> -3 min improvement
            </div>
          </div>
        </div>
        <div className="two-col-equal">
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <i className="ti ti-chart-bar" /> Daily Revenue — May 2026
              </div>
              <span style={{ fontSize: 12, color: "var(--text2)" }}>
                ₱384,200 total
              </span>
            </div>
            <div className="chart-wrap">
              <div className="chart-bar-group" id="rev-chart" />
              <div className="chart-labels" id="rev-labels" />
            </div>
          </div>
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <i className="ti ti-chart-pie" /> Service Breakdown
              </div>
            </div>
            <div style={{ padding: "12px 16px" }}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 14,
                      marginBottom: 4
                    }}
                  >
                    <span>Laboratory</span>
                    <strong>38% · ₱146K</strong>
                  </div>
                  <div
                    style={{
                      background: "var(--bg3)",
                      borderRadius: 4,
                      height: 7
                    }}
                  >
                    <div
                      style={{
                        background: "var(--hp-teal)",
                        width: "38%",
                        height: "100%",
                        borderRadius: 4
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 14,
                      marginBottom: 4
                    }}
                  >
                    <span>Imaging / X-Ray</span>
                    <strong>27% · ₱104K</strong>
                  </div>
                  <div
                    style={{
                      background: "var(--bg3)",
                      borderRadius: 4,
                      height: 7
                    }}
                  >
                    <div
                      style={{
                        background: "var(--hp-teal-mid)",
                        width: "27%",
                        height: "100%",
                        borderRadius: 4
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 14,
                      marginBottom: 4
                    }}
                  >
                    <span>Cardiology</span>
                    <strong>20% · ₱77K</strong>
                  </div>
                  <div
                    style={{
                      background: "var(--bg3)",
                      borderRadius: 4,
                      height: 7
                    }}
                  >
                    <div
                      style={{
                        background: "var(--hp-teal-light)",
                        width: "20%",
                        height: "100%",
                        borderRadius: 4
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 14,
                      marginBottom: 4
                    }}
                  >
                    <span>Consultation</span>
                    <strong>10% · ₱38K</strong>
                  </div>
                  <div
                    style={{
                      background: "var(--bg3)",
                      borderRadius: 4,
                      height: 7
                    }}
                  >
                    <div
                      style={{
                        background: "var(--hp-amber)",
                        width: "10%",
                        height: "100%",
                        borderRadius: 4
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 14,
                      marginBottom: 4
                    }}
                  >
                    <span>Home Service</span>
                    <strong>5% · ₱19K</strong>
                  </div>
                  <div
                    style={{
                      background: "var(--bg3)",
                      borderRadius: 4,
                      height: 7
                    }}
                  >
                    <div
                      style={{
                        background: "var(--hp-red)",
                        width: "5%",
                        height: "100%",
                        borderRadius: 4
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <i className="ti ti-files" /> Available Reports
            </div>
          </div>
          <div style={{ padding: "12px 16px" }}>
            <div className="report-card">
              <div className="report-card-left">
                <div className="report-icon green">
                  <i className="ti ti-users" />
                </div>
                <div>
                  <div className="report-name">Daily Patient Census</div>
                  <div className="report-meta">
                    Generated today · 47 patients · May 18, 2026
                  </div>
                </div>
              </div>
              <div className="report-actions">
                <button
                  className="btn-secondary"
                  style={{ fontSize: 13, padding: "8px 14px" }}
                >
                  <i className="ti ti-eye" /> Preview
                </button>
                <button
                  className="btn-primary"
                  style={{ fontSize: 13, padding: "8px 14px" }}
                  onclick="showToast('Downloading Daily Patient Census…')"
                >
                  <i className="ti ti-download" /> Download PDF
                </button>
              </div>
            </div>
            <div className="report-card">
              <div className="report-card-left">
                <div className="report-icon blue">
                  <i className="ti ti-file-invoice" />
                </div>
                <div>
                  <div className="report-name">Monthly Revenue Report</div>
                  <div className="report-meta">
                    May 2026 · ₱384,200 total · 1,204 transactions
                  </div>
                </div>
              </div>
              <div className="report-actions">
                <button
                  className="btn-secondary"
                  style={{ fontSize: 13, padding: "8px 14px" }}
                >
                  <i className="ti ti-eye" /> Preview
                </button>
                <button
                  className="btn-primary"
                  style={{ fontSize: 13, padding: "8px 14px" }}
                  onclick="showToast('Downloading Monthly Revenue Report…')"
                >
                  <i className="ti ti-download" /> Download PDF
                </button>
              </div>
            </div>
            <div className="report-card">
              <div className="report-card-left">
                <div className="report-icon amber">
                  <i className="ti ti-flask" />
                </div>
                <div>
                  <div className="report-name">
                    Laboratory Utilization Report
                  </div>
                  <div className="report-meta">
                    May 2026 · 876 tests · Top: CBC (234 requests)
                  </div>
                </div>
              </div>
              <div className="report-actions">
                <button
                  className="btn-secondary"
                  style={{ fontSize: 13, padding: "8px 14px" }}
                >
                  <i className="ti ti-eye" /> Preview
                </button>
                <button
                  className="btn-primary"
                  style={{ fontSize: 13, padding: "8px 14px" }}
                  onclick="showToast('Downloading Lab Utilization Report…')"
                >
                  <i className="ti ti-download" /> Download PDF
                </button>
              </div>
            </div>
            <div className="report-card">
              <div className="report-card-left">
                <div className="report-icon red">
                  <i className="ti ti-heart-rate-monitor" />
                </div>
                <div>
                  <div className="report-name">Queue Performance Report</div>
                  <div className="report-meta">
                    May 2026 · Avg wait: 21 min · Peak: 10:00–11:00 AM
                  </div>
                </div>
              </div>
              <div className="report-actions">
                <button
                  className="btn-secondary"
                  style={{ fontSize: 13, padding: "8px 14px" }}
                >
                  <i className="ti ti-eye" /> Preview
                </button>
                <button
                  className="btn-primary"
                  style={{ fontSize: 13, padding: "8px 14px" }}
                  onclick="showToast('Downloading Queue Performance Report…')"
                >
                  <i className="ti ti-download" /> Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NURSE MONITORING */}
      <div className="page" id="page-monitoring">
        <div className="content-header">
          <div>
            <div className="content-title">Patient Monitoring</div>
            <div className="content-sub">Record vitals and treatment notes</div>
          </div>
        </div>
        <div id="nurse-monitoring-content" />
      </div>
      {/* NURSE VITALS */}
      <div className="page" id="page-vitals">
        <div className="content-header">
          <div>
            <div className="content-title">Vital Signs</div>
            <div className="content-sub">Record and review patient vitals</div>
          </div>
        </div>
        <div id="vitals-content" />
      </div>
      {/* NURSE LAB REQUESTS */}
      <div className="page" id="page-labreqs">
        <div className="content-header">
          <div>
            <div className="content-title">Lab Requests</div>
            <div className="content-sub">Pending laboratory requests</div>
          </div>
        </div>
        <div id="labreqs-content" />
      </div>
      {/* NURSE TREATMENT LOG */}
      <div className="page" id="page-treatlog">
        <div className="content-header">
          <div>
            <div className="content-title">Treatment Log</div>
            <div className="content-sub">
              Patient treatment notes and history
            </div>
          </div>
        </div>
        <div id="treatlog-content" />
      </div>
      {/* DOCTOR EMR */}
      <div className="page" id="page-emr">
        <div className="content-header">
          <div>
            <div className="content-title">EMR / Consultations</div>
            <div className="content-sub">
              Electronic Medical Records — click any patient to view full
              profile
            </div>
          </div>
        </div>
        <div
          className="search-wrap"
          style={{ padding: "12px 16px", marginBottom: 16 }}
        >
          <i className="ti ti-search" style={{ fontSize: 18 }} />
          <input
            type="text"
            id="emr-search"
            placeholder="Search patients by name or ID…"
            style={{ fontSize: 15 }}
            oninput="renderEMRList()"
          />
        </div>
        <div className="panel" id="emr-list-panel">
          <div id="emr-patient-list" style={{ padding: 10 }} />
        </div>
      </div>
      {/* DOCTOR LAB RESULTS */}
      <div className="page" id="page-labresults">
        <div className="content-header">
          <div>
            <div className="content-title">Lab Results</div>
            <div className="content-sub">Results for review</div>
          </div>
        </div>
        <div id="labresults-content" />
      </div>
      {/* DOCTOR PRESCRIPTIONS */}
      <div className="page" id="page-prescriptions">
        <div className="content-header">
          <div>
            <div className="content-title">Prescriptions</div>
            <div className="content-sub">Manage prescriptions</div>
          </div>
          <button
            className="btn-primary"
            onclick="openModal('prescription-modal')"
          >
            <i className="ti ti-plus" /> New Prescription
          </button>
        </div>
        <div className="panel">
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Frequency</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="prescriptions-table-body" />
          </table>
        </div>
      </div>
      {/* DOCTOR CERTIFICATES */}
      <div className="page" id="page-certificates">
        <div className="content-header">
          <div>
            <div className="content-title">Laboratory Exams</div>
            <div className="content-sub">
              View and manage patient laboratory examinations
            </div>
          </div>
          <button
            className="btn-primary"
            onclick="openModal('certificate-modal')"
          >
            <i className="ti ti-plus" /> Upload Lab Exam
          </button>
        </div>
        <div className="panel">
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Exam Type</th>
                <th>Date</th>
                <th>Files</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="certificates-table-body" />
          </table>
        </div>
      </div>
      {/* DOCTOR TREATMENT PLANS */}
      <div className="page" id="page-treatplans">
        <div className="content-header">
          <div>
            <div className="content-title">Treatment Plans</div>
            <div className="content-sub">Manage patient treatment plans</div>
          </div>
          <button
            className="btn-primary"
            onclick="openModal('treatplan-modal')"
          >
            <i className="ti ti-plus" /> New Plan
          </button>
        </div>
        <div className="panel">
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Diagnosis</th>
                <th>Plan</th>
                <th>Follow-up</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="treatplans-table-body" />
          </table>
        </div>
      </div>
      {/* DOCTOR PATIENT HISTORY PAGE (NEW) */}
      <div className="page" id="page-patient-history">
        <div className="content-header">
          <div>
            <div className="content-title">Patient History</div>
            <div className="content-sub">
              All patients and their consultation history
            </div>
          </div>
          <div className="search-wrap" style={{ width: 280 }}>
            <i className="ti ti-search" />
            <input
              type="text"
              id="history-search"
              placeholder="Search patients…"
              oninput="renderPatientHistoryPage()"
            />
          </div>
        </div>
        <div id="patient-history-content" />
      </div>
      {/* DOCTOR PATIENT PROFILE FULL PAGE (NEW) */}
      <div className="page" id="page-patient-profile-doctor">
        <button className="patient-page-back-btn" onclick="navigateTo('emr')">
          <i className="ti ti-arrow-left" /> Back to EMR
        </button>
        <div id="patient-profile-doctor-content">
          <div
            style={{ padding: 48, textAlign: "center", color: "var(--text2)" }}
          >
            <i
              className="ti ti-user-search"
              style={{ fontSize: 36, display: "block", marginBottom: 12 }}
            />
            Select a patient to view their profile
          </div>
        </div>
      </div>
      {/* DOCTOR CONSULTATION NOTES PAGE (NEW) */}
      <div className="page" id="page-consult-notes">
        <div className="content-header">
          <div>
            <div className="content-title">Consultation Notes</div>
            <div className="content-sub">
              Record and review consultation notes per patient
            </div>
          </div>
          <button
            className="btn-primary"
            onclick="openModal('consult-note-modal')"
          >
            <i className="ti ti-notes" /> Add Note
          </button>
        </div>
        <div id="consult-notes-content" />
      </div>
      {/* UX/UI AUDIT PAGE */}
      <div className="page" id="page-ux-audit">
        <div className="content-header">
          <div>
            <div className="content-title">UX / UI Audit</div>
            <div className="content-sub">
              Hi-Precision Diagnostics PMS · Design Review
            </div>
          </div>
        </div>
        {/* Summary chips */}
        <div className="audit-summary-bar">
          <div className="audit-count-chip critical">
            <div className="chip-num">3</div>
            <div className="chip-label">Critical</div>
          </div>
          <div className="audit-count-chip major">
            <div className="chip-num">5</div>
            <div className="chip-label">Major</div>
          </div>
          <div className="audit-count-chip minor">
            <div className="chip-num">5</div>
            <div className="chip-label">Minor / Polish</div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              padding: "0 8px",
              fontSize: 13,
              color: "var(--text2)"
            }}
          >
            Solid visual execution — UX architecture needs work. The system has
            strong brand consistency, clean visual language, and good component
            variety. Critical gaps are in navigation scalability, role-switching
            UX, empty states, and keyboard/accessibility coverage.
          </div>
        </div>
        {/* Filters */}
        <div className="audit-filter-bar">
          <button
            className="audit-filter-btn active"
            onclick="auditFilter('all',this)"
          >
            All Issues
          </button>
          <button
            className="audit-filter-btn sev-critical"
            onclick="auditFilter('critical',this)"
          >
            Critical
          </button>
          <button
            className="audit-filter-btn sev-major"
            onclick="auditFilter('major',this)"
          >
            Major
          </button>
          <button
            className="audit-filter-btn sev-minor"
            onclick="auditFilter('minor',this)"
          >
            Minor / Polish
          </button>
        </div>
        {/* CRITICAL */}
        <div className="audit-section-header audit-group-critical">
          Critical — blocks workflow or causes errors
        </div>
        <div
          className="audit-card audit-group-critical"
          onclick="toggleAuditCard(this)"
        >
          <div className="audit-card-header">
            <span className="audit-sev-pill critical">Critical</span>
            <div className="audit-card-title">
              Unrestricted role-switching widget in topbar
            </div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          <div className="audit-card-body">
            <div className="audit-issue-text">
              The Front Desk / Nurse / Doctor toggle sits in the topbar as three
              persistent buttons. Any user can tap any role at any time — with
              no confirmation, no context switch warning, and no indication that
              they've just changed their active permission set. In a clinical
              workflow this is dangerous: a nurse accidentally switching to
              Doctor view, or a front desk clerk seeing the doctor's lab review
              panel, is a real misuse scenario.
            </div>
            <div className="audit-rec-box">
              <div className="audit-rec-label">Recommendation</div>
              <div className="audit-rec-text">
                Role selection should happen at login (mapped to credentials),
                not be a freely clickable widget in the topbar. If demo/admin
                multi-role switching is needed, gate it behind an explicit
                "Switch Role" action with a confirmation step and a visible
                indicator that you're in a non-default role.
              </div>
            </div>
          </div>
        </div>
        <div
          className="audit-card audit-group-critical"
          onclick="toggleAuditCard(this)"
        >
          <div className="audit-card-header">
            <span className="audit-sev-pill critical">Critical</span>
            <div className="audit-card-title">
              Sidebar shows all items for every role — no visual hierarchy
            </div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          <div className="audit-card-body">
            <div className="audit-issue-text">
              There are section labels ("Clinical", "Admin" etc.) but all items
              are the same visual weight — same font size, same icon size, same
              indent, same padding. Users can't quickly scan to find their
              destination. The sidebar also shows every possible item for every
              role: a nurse doesn't need billing, a front desk clerk doesn't
              need prescriptions. This violates Hick's Law — every irrelevant
              option adds cognitive load.
            </div>
            <div className="audit-rec-box">
              <div className="audit-rec-label">Recommendation</div>
              <div className="audit-rec-text">
                Collapse the sidebar to role-appropriate items only. Use clear
                visual grouping — slightly heavier section headers, 8px vertical
                gap between groups, and a subtle divider line. Consider
                collapsible groups or a 2-level nav (primary icons → secondary
                expanded labels) at this item count.
              </div>
            </div>
          </div>
        </div>
        <div
          className="audit-card audit-group-critical"
          onclick="toggleAuditCard(this)"
        >
          <div className="audit-card-header">
            <span className="audit-sev-pill critical">Critical</span>
            <div className="audit-card-title">
              No empty states on any data view
            </div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          <div className="audit-card-body">
            <div className="audit-issue-text">
              Every table, panel, and list renders purely from JS data. When a
              filter returns no results, when there are no appointments today,
              or when a new clinic install has no patients yet — there's nothing
              to tell the user why the screen is blank. The app becomes
              confusing rather than instructive at those moments, and staff may
              assume it's broken.
            </div>
            <div className="audit-rec-box">
              <div className="audit-rec-label">Recommendation</div>
              <div className="audit-rec-text">
                Add empty state templates for every data view: a short icon, a
                clear heading ("No patients match this filter"), and a
                contextual action button ("Clear filters" or "Register first
                patient"). These take 20 minutes to build and prevent dozens of
                confused support calls.
              </div>
            </div>
          </div>
        </div>
        {/* MAJOR */}
        <div className="audit-section-header audit-group-major">
          Major — significant friction, should fix
        </div>
        <div
          className="audit-card audit-group-major"
          onclick="toggleAuditCard(this)"
        >
          <div className="audit-card-header">
            <span className="audit-sev-pill major">Major</span>
            <div className="audit-card-title">
              Registration form has no auto-save, draft, or leave-page warning
            </div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          <div className="audit-card-body">
            <div className="audit-issue-text">
              The 3-step patient registration form has no auto-save, no draft,
              and no warning when navigating away mid-form. Front desk staff are
              frequently interrupted by phone calls or walk-ins. If they
              accidentally click a sidebar nav item at Step 2, the entire form
              is lost. There's also no way to resume a partial registration for
              a patient who comes back the next day.
            </div>
            <div className="audit-rec-box">
              <div className="audit-rec-label">Recommendation</div>
              <div className="audit-rec-text">
                Add a "leave page?" confirmation dialog when navigating away
                from an in-progress form. Persist draft state to localStorage
                keyed to session. Show a "Draft saved" indicator after each step
                completion.
              </div>
            </div>
          </div>
        </div>
        <div
          className="audit-card audit-group-major"
          onclick="toggleAuditCard(this)"
        >
          <div className="audit-card-header">
            <span className="audit-sev-pill major">Major</span>
            <div className="audit-card-title">
              User avatar is non-interactive; logout is buried in sidebar footer
            </div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          <div className="audit-card-body">
            <div className="audit-issue-text">
              The user avatar and name in the top-right are non-interactive.
              Logout is buried in the sidebar footer as a small, low-contrast
              item. Users expect the avatar to be the primary access point for
              account settings and logout, especially on shared clinical
              workstations where fast user switching matters.
            </div>
            <div className="audit-rec-box">
              <div className="audit-rec-label">Recommendation</div>
              <div className="audit-rec-text">
                Make the avatar a dropdown trigger with at minimum: current user
                info, "Switch Role" (if kept), and "Sign Out" with a prominent
                confirmation. The sidebar footer logout can remain as a
                secondary path.
              </div>
            </div>
          </div>
        </div>
        <div
          className="audit-card audit-group-major"
          onclick="toggleAuditCard(this)"
        >
          <div className="audit-card-header">
            <span className="audit-sev-pill major">Major</span>
            <div className="audit-card-title">
              Queue page duplicates data in kanban and table simultaneously
            </div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          <div className="audit-card-body">
            <div className="audit-issue-text">
              The Queue page shows a 3-column kanban board (Waiting / In
              Progress / Done) AND a full data table below it, both showing the
              same patients. This doubles the scroll length, forces the user to
              reconcile two representations of the same data, and creates
              ambiguity about which view is "authoritative" for taking action.
            </div>
            <div className="audit-rec-box">
              <div className="audit-rec-label">Recommendation</div>
              <div className="audit-rec-text">
                Pick one: the kanban board is better for real-time triage and
                status moving, while the table is better for bulk management.
                Consider a view toggle (board / list) at the top of the page,
                defaulting to the board for clinical workflows.
              </div>
            </div>
          </div>
        </div>
        <div
          className="audit-card audit-group-major"
          onclick="toggleAuditCard(this)"
        >
          <div className="audit-card-header">
            <span className="audit-sev-pill major">Major</span>
            <div className="audit-card-title">
              New appointment modal allows double-booking with no conflict check
            </div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          <div className="audit-card-body">
            <div className="audit-issue-text">
              The new appointment modal accepts a date and time input but has no
              validation against existing bookings for the same doctor or room.
              Double-bookings are not prevented or even flagged. The calendar
              widget also doesn't reflect availability — it only marks days that
              have existing appointments, not whether those days are full.
            </div>
            <div className="audit-rec-box">
              <div className="audit-rec-label">Recommendation</div>
              <div className="audit-rec-text">
                Before confirming an appointment, check for doctor availability
                conflicts and surface a warning: "Dr. Cruz has 3 appointments
                between 10–11am on this day. Confirm anyway?" The calendar
                should also show a capacity heatmap — light fill for sparse,
                darker for near-full.
              </div>
            </div>
          </div>
        </div>
        <div
          className="audit-card audit-group-major"
          onclick="toggleAuditCard(this)"
        >
          <div className="audit-card-header">
            <span className="audit-sev-pill major">Major</span>
            <div className="audit-card-title">
              No keyboard navigation, focus trapping, or shortcuts
            </div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          <div className="audit-card-body">
            <div className="audit-issue-text">
              The entire application relies on click/tap interaction. Tab order
              is not set, modals don't trap focus (pressing Tab while a modal is
              open cycles through background content), and there are no keyboard
              shortcuts for high-frequency actions like "Register new patient"
              or "Next in queue." In a busy clinical environment, mouse-free
              operation is a real productivity need.
            </div>
            <div className="audit-rec-box">
              <div className="audit-rec-label">Recommendation</div>
              <div className="audit-rec-text">
                Add focus trap to all modals. Set logical tabindex order on
                forms. Add at least 2–3 keyboard shortcuts for primary actions
                (e.g. N = new patient, Q = open queue) with a visible shortcut
                hint in the sidebar or via a ? help overlay.
              </div>
            </div>
          </div>
        </div>
        {/* MINOR */}
        <div className="audit-section-header audit-group-minor">
          Minor / Polish
        </div>
        <div
          className="audit-card audit-group-minor"
          onclick="toggleAuditCard(this)"
        >
          <div className="audit-card-header">
            <span className="audit-sev-pill minor">Minor</span>
            <div className="audit-card-title">
              Tagline text fails WCAG AA contrast (≈2.0:1 ratio)
            </div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          <div className="audit-card-body">
            <div className="audit-issue-text">
              The "Diagnostics · PMS" tagline is set at 9px with 40% white
              opacity on a dark background. This renders at about 2.0:1 contrast
              ratio — well below the WCAG AA minimum of 4.5:1. It also serves no
              functional purpose for logged-in users who already know what
              system they're using.
            </div>
            <div className="audit-rec-box">
              <div className="audit-rec-label">Recommendation</div>
              <div className="audit-rec-text">
                Remove it entirely, or increase to 11px at 60% opacity. The
                information density it adds is zero; the accessibility cost is
                real.
              </div>
            </div>
          </div>
        </div>
        <div
          className="audit-card audit-group-minor"
          onclick="toggleAuditCard(this)"
        >
          <div className="audit-card-header">
            <span className="audit-sev-pill minor">Minor</span>
            <div className="audit-card-title">
              Duplicate CSS: .filter-chip and .bill-status-chip are identical
            </div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          <div className="audit-card-body">
            <div className="audit-issue-text">
              The .filter-chip and .bill-status-chip classes have identical CSS.
              They are the same component written under two names, meaning
              future style changes need to be applied in two places. This is a
              maintainability and consistency risk.
            </div>
            <div className="audit-rec-box">
              <div className="audit-rec-label">Recommendation</div>
              <div className="audit-rec-text">
                Consolidate into a single .chip component class. Minor, but
                worth fixing before the codebase grows further.
              </div>
            </div>
          </div>
        </div>
        <div
          className="audit-card audit-group-minor"
          onclick="toggleAuditCard(this)"
        >
          <div className="audit-card-header">
            <span className="audit-sev-pill minor">Minor</span>
            <div className="audit-card-title">
              Dashboard stat cards show deltas with no trend context
            </div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          <div className="audit-card-body">
            <div className="audit-issue-text">
              The 4 stat cards show a number and a delta (e.g. +3 from
              yesterday) but no historical trend. A delta alone can be
              misleading — "+3 from yesterday" means very different things if
              yesterday was 2 vs 200. Clinical managers need at-a-glance trend
              context to make staffing decisions.
            </div>
            <div className="audit-rec-box">
              <div className="audit-rec-label">Recommendation</div>
              <div className="audit-rec-text">
                Add a mini 7-day sparkline beneath each stat value, or at
                minimum a tooltip showing the 7-day average. The chart
                infrastructure already exists on the Billing page — reuse it.
              </div>
            </div>
          </div>
        </div>
        <div
          className="audit-card audit-group-minor"
          onclick="toggleAuditCard(this)"
        >
          <div className="audit-card-header">
            <span className="audit-sev-pill minor">Minor</span>
            <div className="audit-card-title">
              Overdue billing rows use full red row background — hard to scan at
              scale
            </div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          <div className="audit-card-body">
            <div className="audit-issue-text">
              The .overdue row class applies a full coral/red background to the
              entire table row. At scale, a billing table with many overdue
              items becomes visually overwhelming and makes it harder to scan
              the other columns (patient name, amount, doctor) that are rendered
              in normal contrast against the colored background.
            </div>
            <div className="audit-rec-box">
              <div className="audit-rec-label">Recommendation</div>
              <div className="audit-rec-text">
                Use a left border accent (4px solid red) instead of a full row
                background. Reserve the full background treatment for truly
                critical single-item callouts, not repeating rows.
              </div>
            </div>
          </div>
        </div>
        <div
          className="audit-card audit-group-minor"
          onclick="toggleAuditCard(this)"
        >
          <div className="audit-card-header">
            <span className="audit-sev-pill minor">Minor</span>
            <div className="audit-card-title">
              Print Queue renders the full app UI — unusable in clinical
              settings
            </div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          <div className="audit-card-body">
            <div className="audit-issue-text">
              The Print Queue button triggers the browser's native print dialog,
              which will render the full app UI — sidebar, topbar, background
              colors — as-is. The resulting printout will be unusable and
              ink-wasteful in a real clinical setting.
            </div>
            <div className="audit-rec-box">
              <div className="audit-rec-label">Recommendation</div>
              <div className="audit-rec-text">
                Add a @media print stylesheet that hides the sidebar, topbar,
                and all interactive elements, and renders only the queue table
                in a clean black-and-white layout with the clinic name and print
                date as a header.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end page-ux-audit */}
    </div>
  </div>
  {/* MODALS */}
  <div className="modal-overlay" id="patient-modal">
    <div className="modal">
      <div className="modal-header">
        <div className="modal-title">Patient Profile</div>
        <button className="modal-close" onclick="closeModal('patient-modal')">
          ✕
        </button>
      </div>
      <div className="modal-body" id="patient-modal-body">
        <div
          className="patient-profile-card"
          style={{ background: "var(--hp-teal-bg)" }}
          id="patient-modal-header"
        />
        <div className="tab-bar">
          <button
            className="tab-btn active"
            onclick="switchPatientTab(this,'visits')"
          >
            Visit History
          </button>
          <button className="tab-btn" onclick="switchPatientTab(this,'vitals')">
            Vitals
          </button>
          <button className="tab-btn" onclick="switchPatientTab(this,'labs')">
            Lab Results
          </button>
          <button
            className="tab-btn"
            onclick="switchPatientTab(this,'labexams')"
          >
            Lab Exams
          </button>
          <button
            className="tab-btn"
            onclick="switchPatientTab(this,'billing')"
          >
            Billing
          </button>
        </div>
        <div id="patient-tab-content" />
      </div>
      <div className="modal-footer">
        <button className="btn-secondary" onclick="closeModal('patient-modal')">
          Close
        </button>
        <button
          className="btn-primary"
          onclick="navigateTo('billing');closeModal('patient-modal')"
        >
          <i className="ti ti-receipt" /> View Invoice
        </button>
      </div>
    </div>
  </div>
  <div className="modal-overlay" id="edit-patient-modal">
    <div className="modal">
      <div className="modal-header">
        <div className="modal-title">Edit Patient</div>
        <button
          className="modal-close"
          onclick="closeModal('edit-patient-modal')"
        >
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-input" id="edit-lastname" />
          </div>
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input type="text" className="form-input" id="edit-firstname" />
          </div>
          <div className="form-group">
            <label className="form-label">Contact</label>
            <input type="text" className="form-input" id="edit-contact" />
          </div>
          <div className="form-group">
            <label className="form-label">Status</label>
            <select className="form-select" id="edit-status">
              <option>Waiting</option>
              <option>In Progress</option>
              <option>Done</option>
              <option>Urgent</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Service</label>
            <input type="text" className="form-input" id="edit-service" />
          </div>
          <div className="form-group">
            <label className="form-label">Doctor</label>
            <select className="form-select" id="edit-doctor">
              <option>Dr. Cruz</option>
              <option>Dr. Ramos</option>
              <option>Dr. Reyes</option>
              <option>Dr. Lim</option>
              <option>Dr. Santos</option>
            </select>
          </div>
        </div>
        <input type="hidden" id="edit-patient-id" />
      </div>
      <div className="modal-footer">
        <button
          className="btn-secondary"
          onclick="closeModal('edit-patient-modal')"
        >
          Cancel
        </button>
        <button className="btn-primary" onclick="saveEditPatient()">
          <i className="ti ti-check" /> Save Changes
        </button>
      </div>
    </div>
  </div>
  <div className="modal-overlay" id="appt-modal">
    <div className="modal">
      <div className="modal-header">
        <div className="modal-title">New Appointment</div>
        <button className="modal-close" onclick="closeModal('appt-modal')">
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div className="form-grid">
          <div className="form-group full">
            <label className="form-label">
              Patient <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <select className="form-select" id="appt-patient">
              <option value="">-- Select Patient --</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">
              Service <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <select className="form-select" id="appt-service">
              <option value="">-- Select --</option>
              <option>CBC</option>
              <option>Urinalysis</option>
              <option>Chest X-Ray</option>
              <option>ECG</option>
              <option>Ultrasound</option>
              <option>CT-Scan</option>
              <option>Consultation</option>
              <option>Mammography</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Doctor</label>
            <select className="form-select" id="appt-doctor">
              <option>Dr. Cruz</option>
              <option>Dr. Ramos</option>
              <option>Dr. Reyes</option>
              <option>Dr. Lim</option>
              <option>Dr. Santos</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">
              Date <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <input type="date" className="form-input" id="appt-date" />
          </div>
          <div className="form-group">
            <label className="form-label">Time</label>
            <select className="form-select" id="appt-time">
              <option>8:00 AM</option>
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
            </select>
          </div>
          <div className="form-group full">
            <label className="form-label">Notes</label>
            <textarea
              className="form-textarea"
              id="appt-notes"
              placeholder="Additional notes…"
              style={{ minHeight: 56 }}
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn-secondary" onclick="closeModal('appt-modal')">
          Cancel
        </button>
        <button className="btn-primary" onclick="saveAppointment()">
          <i className="ti ti-check" /> Confirm Appointment
        </button>
      </div>
    </div>
  </div>
  <div className="modal-overlay" id="billing-modal">
    <div className="modal">
      <div className="modal-header">
        <div className="modal-title">New Invoice</div>
        <button className="modal-close" onclick="closeModal('billing-modal')">
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div className="form-grid">
          <div className="form-group full">
            <label className="form-label">
              Patient <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <select className="form-select" id="inv-patient">
              <option value="">-- Select Patient --</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Service</label>
            <select className="form-select" id="inv-service">
              <option>CBC</option>
              <option>Urinalysis</option>
              <option>Chest X-Ray</option>
              <option>ECG</option>
              <option>CT-Scan</option>
              <option>Consultation</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">
              Amount (₱) <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <input
              type="number"
              className="form-input"
              id="inv-amount"
              placeholder={0.0}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Payment Method</label>
            <select className="form-select" id="inv-method">
              <option>Cash</option>
              <option>GCash / Maya</option>
              <option>Credit Card</option>
              <option>HMO</option>
              <option>PhilHealth</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Discount</label>
            <select className="form-select" id="inv-discount">
              <option>None</option>
              <option>Senior Citizen (20%)</option>
              <option>PWD (20%)</option>
              <option>Employee</option>
            </select>
          </div>
          <div className="form-group full">
            <label className="form-label">Remarks</label>
            <textarea
              className="form-textarea"
              id="inv-remarks"
              placeholder="Optional notes…"
              style={{ minHeight: 52 }}
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn-secondary" onclick="closeModal('billing-modal')">
          Cancel
        </button>
        <button className="btn-primary" onclick="saveInvoice()">
          <i className="ti ti-receipt" /> Create Invoice
        </button>
      </div>
    </div>
  </div>
  <div className="modal-overlay" id="export-modal">
    <div className="modal" style={{ width: 380 }}>
      <div className="modal-header">
        <div className="modal-title">Export Patient Records</div>
        <button className="modal-close" onclick="closeModal('export-modal')">
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div className="form-group" style={{ marginBottom: 12 }}>
          <label className="form-label">Format</label>
          <select className="form-select">
            <option>PDF</option>
            <option>CSV / Excel</option>
          </select>
        </div>
        <div className="form-group" style={{ marginBottom: 12 }}>
          <label className="form-label">Date Range</label>
          <input type="date" className="form-input" />
        </div>
        <div
          style={{
            background: "#FEF5E7",
            border: "1px solid #f5d89a",
            borderRadius: 8,
            padding: "10px 13px",
            fontSize: 13,
            color: "#633806"
          }}
        >
          <i className="ti ti-lock" style={{ marginRight: 5 }} />
          Exported files are protected under the Data Privacy Act of 2012.
          Handle with care.
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn-secondary" onclick="closeModal('export-modal')">
          Cancel
        </button>
        <button
          className="btn-primary"
          onclick="closeModal('export-modal');showToast('Export started — file will be ready shortly.')"
        >
          <i className="ti ti-download" /> Export
        </button>
      </div>
    </div>
  </div>
  <div className="modal-overlay" id="vitals-modal">
    <div className="modal">
      <div className="modal-header">
        <div className="modal-title">Record Vitals</div>
        <button className="modal-close" onclick="closeModal('vitals-modal')">
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 14,
            color: "var(--text2)"
          }}
        >
          Patient: <strong id="vitals-modal-patient" />
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Systolic (mmHg)</label>
            <input
              type="number"
              className="form-input"
              id="v-systolic"
              placeholder={120}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Diastolic (mmHg)</label>
            <input
              type="number"
              className="form-input"
              id="v-diastolic"
              placeholder={80}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Heart Rate (bpm)</label>
            <input
              type="number"
              className="form-input"
              id="v-hr"
              placeholder={72}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Temperature (°C)</label>
            <input
              type="number"
              className="form-input"
              id="v-temp"
              placeholder="36.6"
              step="0.1"
            />
          </div>
          <div className="form-group">
            <label className="form-label">O₂ Saturation (%)</label>
            <input
              type="number"
              className="form-input"
              id="v-spo2"
              placeholder={99}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Weight (kg)</label>
            <input
              type="number"
              className="form-input"
              id="v-weight"
              placeholder={65}
            />
          </div>
        </div>
        <input type="hidden" id="v-patient-id" />
      </div>
      <div className="modal-footer">
        <button className="btn-secondary" onclick="closeModal('vitals-modal')">
          Cancel
        </button>
        <button className="btn-primary" onclick="saveVitals()">
          <i className="ti ti-check" /> Save Vitals
        </button>
      </div>
    </div>
  </div>
  <div className="modal-overlay" id="prescription-modal">
    <div className="modal">
      <div className="modal-header">
        <div className="modal-title">New Prescription</div>
        <button
          className="modal-close"
          onclick="closeModal('prescription-modal')"
        >
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div className="form-grid">
          <div className="form-group full">
            <label className="form-label">
              Patient <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <select className="form-select" id="rx-patient">
              <option value="">-- Select --</option>
            </select>
          </div>
          <div className="form-group full">
            <label className="form-label">
              Medication <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <input
              type="text"
              className="form-input"
              id="rx-med"
              placeholder="Drug name and strength"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Dosage</label>
            <input
              type="text"
              className="form-input"
              id="rx-dose"
              placeholder="e.g. 1 tablet"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Frequency</label>
            <input
              type="text"
              className="form-input"
              id="rx-freq"
              placeholder="e.g. Once daily"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Duration</label>
            <input
              type="text"
              className="form-input"
              id="rx-duration"
              placeholder="e.g. 7 days"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Notes</label>
            <input
              type="text"
              className="form-input"
              id="rx-notes"
              placeholder="Special instructions"
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="btn-secondary"
          onclick="closeModal('prescription-modal')"
        >
          Cancel
        </button>
        <button className="btn-primary" onclick="savePrescription()">
          <i className="ti ti-check" /> Save Prescription
        </button>
      </div>
    </div>
  </div>
  <div className="modal-overlay" id="certificate-modal">
    <div className="modal">
      <div className="modal-header">
        <div className="modal-title">Upload Laboratory Exam</div>
        <button
          className="modal-close"
          onclick="closeModal('certificate-modal')"
        >
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div className="form-grid">
          <div className="form-group full">
            <label className="form-label">
              Patient <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <select className="form-select" id="cert-patient">
              <option value="">-- Select --</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">
              Exam Type <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <select className="form-select" id="cert-type">
              <option value="">-- Select --</option>
              <option>Complete Blood Count (CBC)</option>
              <option>Urinalysis</option>
              <option>X-Ray</option>
              <option>CT Scan</option>
              <option>MRI</option>
              <option>Ultrasound</option>
              <option>ECG</option>
              <option>Blood Chemistry</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Date</label>
            <input type="date" className="form-input" id="cert-date" />
          </div>
          <div className="form-group full">
            <label className="form-label">
              Upload Lab Files <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <input
              type="file"
              className="form-input"
              id="cert-file"
              accept=".pdf,.jpg,.jpeg,.png,.dcm"
              multiple=""
              style={{ padding: 10 }}
            />
            <small
              style={{
                color: "var(--text2)",
                fontSize: 12,
                display: "block",
                marginTop: 4
              }}
            >
              Accepted formats: PDF, JPG, PNG, DICOM. Multiple files allowed.
            </small>
          </div>
          <div className="form-group full">
            <label className="form-label">Notes (Optional)</label>
            <textarea
              className="form-textarea"
              id="cert-notes"
              placeholder="Additional notes about the laboratory exam…"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="btn-secondary"
          onclick="closeModal('certificate-modal')"
        >
          Cancel
        </button>
        <button className="btn-primary" onclick="saveCertificate()">
          <i className="ti ti-upload" /> Upload Exam
        </button>
      </div>
    </div>
  </div>
  <div className="modal-overlay" id="treatplan-modal">
    <div className="modal">
      <div className="modal-header">
        <div className="modal-title">New Treatment Plan</div>
        <button className="modal-close" onclick="closeModal('treatplan-modal')">
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div className="form-grid">
          <div className="form-group full">
            <label className="form-label">
              Patient <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <select className="form-select" id="tp-patient">
              <option value="">-- Select --</option>
            </select>
          </div>
          <div className="form-group full">
            <label className="form-label">
              Diagnosis <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <input
              type="text"
              className="form-input"
              id="tp-diagnosis"
              placeholder="Primary diagnosis"
            />
          </div>
          <div className="form-group full">
            <label className="form-label">
              Treatment Plan <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <textarea
              className="form-textarea"
              id="tp-plan"
              placeholder="Detailed treatment plan…"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Follow-up Date</label>
            <input type="date" className="form-input" id="tp-followup" />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="btn-secondary"
          onclick="closeModal('treatplan-modal')"
        >
          Cancel
        </button>
        <button className="btn-primary" onclick="saveTreatmentPlan()">
          <i className="ti ti-check" /> Save Plan
        </button>
      </div>
    </div>
  </div>
  {/* CONSULTATION NOTE MODAL (NEW) */}
  <div className="modal-overlay" id="consult-note-modal">
    <div className="modal">
      <div className="modal-header">
        <div className="modal-title">Add Consultation Note</div>
        <button
          className="modal-close"
          onclick="closeModal('consult-note-modal')"
        >
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div className="form-grid">
          <div className="form-group full">
            <label className="form-label">
              Patient <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <select className="form-select" id="cn-patient">
              <option value="">-- Select Patient --</option>
            </select>
          </div>
          <div className="form-group full">
            <label className="form-label">Chief Complaint</label>
            <input
              type="text"
              className="form-input"
              id="cn-complaint"
              placeholder="e.g. Chest pain, fatigue, cough…"
            />
          </div>
          <div className="form-group full">
            <label className="form-label">
              Assessment / Findings{" "}
              <span style={{ color: "var(--hp-red)" }}>*</span>
            </label>
            <textarea
              className="form-textarea"
              id="cn-assessment"
              placeholder="Clinical findings, diagnosis, observations…"
              style={{ minHeight: 96 }}
              defaultValue={""}
            />
          </div>
          <div className="form-group full">
            <label className="form-label">Plan / Remarks</label>
            <textarea
              className="form-textarea"
              id="cn-plan"
              placeholder="Treatment plan, instructions, referrals…"
              style={{ minHeight: 72 }}
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Follow-up Date</label>
            <input type="date" className="form-input" id="cn-followup" />
          </div>
          <div className="form-group">
            <label className="form-label">Diagnosis (ICD)</label>
            <input
              type="text"
              className="form-input"
              id="cn-icd"
              placeholder="e.g. Type 2 DM, Hypertension"
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="btn-secondary"
          onclick="closeModal('consult-note-modal')"
        >
          Cancel
        </button>
        <button className="btn-primary" onclick="saveConsultNote()">
          <i className="ti ti-check" /> Save Note
        </button>
      </div>
    </div>
  </div>
  {/* TIMELINE DETAIL MODAL (NEW) */}
  <div className="modal-overlay" id="timeline-detail-modal">
    <div className="modal" style={{ width: 520 }}>
      <div className="modal-header">
        <div className="modal-title" id="tdm-title">
          Patient Details
        </div>
        <button
          className="modal-close"
          onclick="closeModal('timeline-detail-modal')"
        >
          ✕
        </button>
      </div>
      <div className="modal-body" id="tdm-body" />
      <div className="modal-footer">
        <button
          className="btn-secondary"
          onclick="closeModal('timeline-detail-modal')"
        >
          Close
        </button>
        <button className="btn-primary" id="tdm-emr-btn">
          <i className="ti ti-notes-medical" /> Open Full EMR
        </button>
      </div>
    </div>
  </div>
  {/* TOAST */}
  <div
    id="toast"
    style={{
      position: "fixed",
      bottom: 24,
      right: 24,
      background: "var(--hp-navy)",
      color: "#fff",
      padding: "12px 20px",
      borderRadius: 10,
      fontSize: 14,
      fontFamily: "var(--font)",
      boxShadow: "0 6px 24px rgba(0,0,0,.25)",
      display: "flex",
      alignItems: "center",
      gap: 8,
      zIndex: 999,
      opacity: 0,
      transform: "translateY(10px)",
      transition: "all .25s",
      pointerEvents: "none",
      borderLeft: "3px solid var(--hp-teal)"
    }}
  >
    <i
      className="ti ti-circle-check"
      style={{ color: "var(--hp-teal-light)", fontSize: 18 }}
    />
    <span id="toast-msg" />
  </div>
</>

    </div>
  );

}

export default App;