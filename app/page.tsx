const soriTtsDownloadUrl =
  "https://drive.google.com/file/d/17u1bl_po4bdPFZXihD8jn--BTe3h5WrD/view?usp=drive_link";
const soriTtsLiveDownloadUrl =
  "https://drive.google.com/file/d/1gJ2VFUbArPK9wpmbp7xR5NBdUsTDKksF/view?usp=drive_link"; 


export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="SoriTTS 홈">
          <span className="wordmark-mark" aria-hidden="true">S</span>
          <span>SoriTTS</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#features">기능</a>
          <a href="#samples">음성 샘플</a>
          <a href="#guide">사용법</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> OFFLINE KOREAN TTS · WINDOWS</p>
          <h1>목소리는 선명하게.<br /><em>데이터는 조용하게.</em></h1>
          <p className="hero-description">
            텍스트를 서버에 보내지 않고, 내 PC에서 바로 한국어 음성을 만드세요.
            로그인도 인터넷도 필요 없습니다.<br />
            빠르고 가볍게, 실시간으로 음성을 들어야 한다면 <strong>SoriTTS-Live</strong>를 사용해 보세요.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={soriTtsDownloadUrl} target="_blank" rel="noreferrer">
              SoriTTS 다운로드 <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href={soriTtsLiveDownloadUrl} target="_blank" rel="noreferrer">
              SoriTTS-Live 다운로드 <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="release-note">v1.0.0 · Windows 10/11 x64 · 무료 오픈소스</p>
        </div>

        <div className="app-stage" aria-label="SoriTTS 앱 화면 예시">
          <div className="sound-orbit orbit-one" />
          <div className="sound-orbit orbit-two" />
          <div className="app-window">
            <div className="window-bar">
              <div className="window-title"><span>S</span> SoriTTS</div>
              <div className="window-controls" aria-hidden="true">—  □  ×</div>
            </div>
            <div className="window-body">
              <div className="mock-heading">
                <div><small>OFFLINE KOREAN TTS</small><strong>SoriTTS</strong></div>
                <p>인터넷 연결 없이<br />이 PC에서 음성을 생성합니다.</p>
              </div>
              <div className="mock-textarea">
                안녕하세요. SoriTTS는 내 컴퓨터에서 안전하게 동작하는 한국어 음성 합성 앱입니다.
                <span>52 / 10,000자</span>
              </div>
              <div className="mock-settings">
                <div>음성<strong>여자 목소리 2 ⌄</strong></div>
                <div>속도 <b>1.0×</b><span className="range"><i /></span></div>
              </div>
              <div className="mock-generate">
                <div><small>상태</small><strong>생성 준비 완료</strong></div>
                <button type="button" tabIndex={-1}>음성 생성 →</button>
              </div>
            </div>
          </div>
          <div className="privacy-chip"><span aria-hidden="true">✓</span> 100% 로컬 처리</div>
        </div>
      </section>

      <section className="proof-strip" aria-label="제품 요약">
        <p><strong>10</strong><span>가지 목소리</span></p>
        <p><strong>0.5–2.0×</strong><span>자유로운 속도</span></p>
        <p><strong>10,000</strong><span>자까지 한 번에</span></p>
        <p><strong>0</strong><span>외부 전송</span></p>
      </section>

      <section className="section versions" id="versions">
        <div className="section-heading">
          <p className="eyebrow"><span /> TWO VERSIONS</p>
          <h2>목적에 맞게<br />선택하세요.</h2>
        </div>
        <div className="compare-grid">
          <article className="feature feature-dark">
            <h3>SoriTTS <span>Standard</span></h3>
            <p>텍스트를 고음질 오디오 파일로 변환하고 저장하는 데 최적화되어 있습니다.</p>
            <ul className="compare-list">
              <li><strong>파일 저장:</strong> 완성된 WAV 오디오 파일 생성</li>
              <li><strong>대용량 처리:</strong> 한 번에 최대 10,000자까지 변환 가능</li>
              <li><strong>추천 대상:</strong> 영상 편집자, 팟캐스트/오디오북 제작자</li>
            </ul>
          </article>
          <article className="feature feature-lime">
            <h3>SoriTTS <span>Live</span></h3>
            <p>파일 저장 과정 없이 즉각적으로 텍스트를 스트리밍하여 바로 듣습니다.</p>
            <ul className="compare-list">
              <li><strong>실시간 재생:</strong> 텍스트 입력과 동시에 즉시 오디오 재생</li>
              <li><strong>다운로드 생략:</strong> 번거로운 파일 관리 없이 빠르고 가볍게 구동</li>
              <li><strong>추천 대상:</strong> 화면 낭독이 필요한 분, 실시간 빠른 확인용</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section features" id="features">
        <div className="section-heading">
          <p className="eyebrow"><span /> WHY SORITTS</p>
          <h2>필요한 기능만,<br />제대로 담았습니다.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature feature-dark">
            <span className="feature-number">01</span>
            <div className="privacy-visual" aria-hidden="true"><span>내 PC</span><i>외부 서버</i></div>
            <h3>완전한 오프라인</h3>
            <p>입력한 문장과 생성된 음성은 외부 서버로 전송되지 않습니다. 민감한 원고도 내 PC 안에서 처리하세요.</p>
          </article>
          <article className="feature feature-lime">
            <span className="feature-number">02</span>
            <div className="waveform" aria-hidden="true">
              {[18, 32, 52, 28, 68, 42, 78, 36, 58, 24, 46, 20].map((height, index) => (
                <i key={index} style={{ height }} />
              ))}
            </div>
            <h3>골라 쓰는 11개 음성</h3>
            <p>여성 5개, 남성 5개, 특별 남성 1개 음성과 0.5×부터 2.0×까지 속도 조절을 제공합니다.</p>
          </article>
          <article className="feature feature-light">
            <span className="feature-number">03</span>
            <div className="progress-visual" aria-hidden="true"><b>긴 문장도 차근차근</b><span><i /></span><small>문단별 진행률 72%</small></div>
            <h3>긴 글도 안정적으로</h3>
            <p>최대 10,000자 입력, 문단별 누적 진행률, 작업 취소를 지원합니다. 완성된 결과는 미리 듣고 WAV로 저장할 수 있습니다.</p>
          </article>
        </div>
      </section>

      <section className="section samples" id="samples">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow"><span /> LISTEN FIRST</p>
            <h2>먼저 들어보세요.</h2>
          </div>
          <p>SoriTTS가 실제로 생성한 음성입니다.<br />헤드폰을 권장합니다.</p>
        </div>
        <div className="sample-list">
          <article>
            <div className="sample-meta"><span>01</span><div><strong>남자 목소리 3</strong><small>속도 1.2×</small></div></div>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption -- ponytail: 샘플 원문을 확보하면 VTT 자막 추가. */}
            <audio controls preload="none" src="https://raw.githubusercontent.com/lahuman/sori.tts/main/public/sample1.wav">오디오를 재생할 수 없습니다.</audio>
          </article>
          <article>
            <div className="sample-meta"><span>02</span><div><strong>남자 목소리 5</strong><small>속도 1.0×</small></div></div>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption -- ponytail: 샘플 원문을 확보하면 VTT 자막 추가. */}
            <audio controls preload="none" src="https://raw.githubusercontent.com/lahuman/sori.tts/main/public/sample2.wav">오디오를 재생할 수 없습니다.</audio>
          </article>
        </div>
      </section>

      <section className="section guide" id="guide">
        <div className="section-heading">
          <p className="eyebrow"><span /> THREE STEPS</p>
          <h2>다운로드부터 저장까지,<br />세 단계면 충분합니다.</h2>
        </div>
        <ol className="steps">
          <li><span>1</span><div><h3>압축 풀고 실행</h3><p>ZIP을 새 폴더에 풀고 <code>SoriTTS.exe</code>를 실행하세요. 설치 과정은 없습니다.</p></div></li>
          <li><span>2</span><div><h3>문장과 목소리 선택</h3><p>읽을 텍스트를 입력하고 원하는 음성과 재생 속도를 고르세요.</p></div></li>
          <li><span>3</span><div><h3>생성하고 WAV 저장</h3><p>완성된 음성을 바로 들어본 뒤 원하는 폴더에 WAV 파일로 저장하세요.</p></div></li>
        </ol>
      </section>

      <section className="closing">
        <div>
          <p className="eyebrow eyebrow-light"><span /> YOUR WORDS, YOUR DEVICE</p>
          <h2>당신의 문장은<br /><em>당신의 컴퓨터에만.</em></h2>
        </div>
        <div className="closing-action">
          <p>클라우드 대기 시간도, 계정 생성도 없이<br />지금 바로 음성을 만들어 보세요.</p>
          <div className="hero-actions">
            <a className="button button-lime" href={soriTtsDownloadUrl} target="_blank" rel="noreferrer">SoriTTS 다운로드 <span aria-hidden="true">↓</span></a>
            <a className="button button-outline-light" href={soriTtsLiveDownloadUrl} target="_blank" rel="noreferrer">SoriTTS-Live 다운로드 <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wordmark wordmark-footer"><span className="wordmark-mark">S</span><span>SoriTTS</span></div>
        <p>Supertonic 3 기반 오프라인 한국어 TTS</p>
        <div>
          <a href={"https://raw.githubusercontent.com/lahuman/sori.tts/refs/heads/main/LICENSE.md"} target="_blank" rel="noreferrer">라이선스</a>
          <a href={"https://raw.githubusercontent.com/lahuman/sori.tts/refs/heads/main/MODEL_USE_TERMS.md"} target="_blank" rel="noreferrer">모델 사용 조건</a>
        </div>
      </footer>
    </main>
  );
}


