import { FunctionComponent } from "react";

const MusicDashboard: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-300 w-full h-[1024px] overflow-hidden text-left text-base text-gray-600 font-manrope">
      <div className="absolute top-[567px] left-[302px] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.12)_35.43%,_rgba(255,_255,_255,_0))] w-[808px] h-[86px]" />
      <div className="absolute top-[0px] left-[1142px] bg-gray-200 w-[298px] h-[1024px]" />
      <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[270px] h-[1024px]" />
      <img
        className="absolute top-[35px] left-[32px] w-[146px] h-11 overflow-hidden"
        alt=""
        src="/logo.svg"
      />
      <div className="absolute top-[119px] left-[270px] [background:linear-gradient(270deg,_rgba(255,_255,_255,_0.06),_rgba(255,_255,_255,_0))] w-[269px] h-12 [transform:_rotate(180deg)] [transform-origin:0_0]" />
      <img
        className="absolute top-[587px] left-[222px] w-4 h-4"
        alt=""
        src="/iconplus.svg"
      />
      <div className="absolute top-[131px] left-[32px] flex flex-row items-center justify-start gap-[16px] text-white">
        <img className="relative w-6 h-6" alt="" src="/iconhome.svg" />
        <div className="relative font-semibold">Home</div>
      </div>
      <div className="absolute top-[179px] left-[32px] flex flex-row items-center justify-start gap-[16px]">
        <img className="relative w-6 h-6" alt="" src="/icondiscover.svg" />
        <div className="relative font-medium">Discover</div>
      </div>
      <div className="absolute top-[227px] left-[32px] flex flex-row items-center justify-start gap-[16px]">
        <img className="relative w-6 h-6" alt="" src="/iconradio.svg" />
        <div className="relative font-medium">Radio</div>
      </div>
      <div className="absolute top-[275px] left-[32px] flex flex-row items-center justify-start gap-[16px]">
        <img className="relative w-6 h-6" alt="" src="/iconalbums.svg" />
        <div className="relative font-medium">Albums</div>
      </div>
      <div className="absolute top-[323px] left-[32px] flex flex-row items-center justify-start gap-[16px]">
        <img className="relative w-6 h-6" alt="" src="/iconpodcast.svg" />
        <div className="relative font-medium">Podcast</div>
      </div>
      <b className="absolute top-[587px] left-[32px] text-xs tracking-[0.16em] uppercase">
        Playlist
      </b>
      <b className="absolute top-[387px] left-[32px] text-xs tracking-[0.16em] uppercase">
        library
      </b>
      <div className="absolute top-[627px] left-[32px] flex flex-row items-center justify-start gap-[16px]">
        <img className="relative w-6 h-6" alt="" src="/iconplaylist.svg" />
        <div className="relative font-medium">Lo-fi Music</div>
      </div>
      <div className="absolute top-[427px] left-[32px] flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative w-6 h-6"
          alt=""
          src="/vuesaxbulkmusicsquareadd.svg"
        />
        <div className="relative font-medium">Recently Added</div>
      </div>
      <div className="absolute top-[475px] left-[32px] flex flex-row items-center justify-start gap-[16px]">
        <img className="relative w-6 h-6" alt="" src="/iconfavorite.svg" />
        <div className="relative font-medium">Favorite Songs</div>
      </div>
      <div className="absolute top-[523px] left-[32px] flex flex-row items-center justify-start gap-[16px]">
        <img className="relative w-6 h-6" alt="" src="/iconlocal.svg" />
        <div className="relative font-medium">Local Files</div>
      </div>
      <div className="absolute top-[675px] left-[32px] flex flex-row items-center justify-start gap-[16px]">
        <img className="relative w-6 h-6" alt="" src="/iconplaylist.svg" />
        <div className="relative font-medium">Best of Bon Jovi</div>
      </div>
      <div className="absolute top-[723px] left-[32px] flex flex-row items-center justify-start gap-[16px]">
        <img className="relative w-6 h-6" alt="" src="/iconplaylist.svg" />
        <div className="relative font-medium">Best of John Mayer</div>
      </div>
      <div className="absolute top-[32px] left-[1174px] flex flex-row items-center justify-start gap-[21px] text-white">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="relative rounded-[50%] w-[50px] h-[50px] object-cover"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative font-semibold">James Rodriguez</div>
            <div className="flex flex-row items-start justify-start gap-[4px] text-xs text-gray-600">
              <div className="relative">Premium</div>
              <div className="relative">•</div>
              <img className="relative w-4 h-4" alt="" src="/iconpremium.svg" />
            </div>
          </div>
        </div>
        <img className="relative w-4 h-4" alt="" src="/iconchevrondown.svg" />
      </div>
      <div className="absolute top-[47px] left-[376px] flex flex-row items-center justify-start gap-[12px] text-sm text-gray-400">
        <div className="relative font-semibold">Home</div>
        <img
          className="relative w-3.5 h-3.5"
          alt=""
          src="/iconarrowright.svg"
        />
        <div className="relative font-semibold text-white">Popular Artist</div>
      </div>
      <div className="absolute top-[32px] left-[718px] w-[318px] h-[50px] text-gray-100">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-gray-200 w-[318px] h-[50px]" />
        <div className="absolute top-[14px] left-[16px] flex flex-row items-center justify-start gap-[12px]">
          <img className="relative w-5 h-5" alt="" src="/iconsearch.svg" />
          <div className="relative">Search music, artist, albums...</div>
        </div>
      </div>
      <div className="absolute top-[32px] left-[1060px] rounded-xl bg-gray-200 flex flex-row p-[13px] items-start justify-start">
        <img className="relative w-6 h-6" alt="" src="/iconnotification.svg" />
      </div>
      <div className="absolute top-[32px] left-[302px] rounded-xl bg-gray-200 flex flex-row p-[13px] items-start justify-start">
        <img className="relative w-6 h-6" alt="" src="/iconarrowleft.svg" />
      </div>
      <div className="absolute top-[122px] left-[302px] rounded-2xl bg-white w-[808px] h-[296px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[369px] w-[429px] h-[429px] object-cover"
          alt=""
          src="/fococlipping202201202192-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[1278px] h-[719px] object-cover"
          alt=""
          src="/image-139@2x.png"
        />
        <div className="absolute top-[52px] left-[40px] flex flex-col items-start justify-start gap-[32px]">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/iconverified.svg"
                />
                <div className="relative font-medium">Verified Artist</div>
              </div>
              <b className="relative text-[50px] text-white">Ed Sheeran</b>
            </div>
            <div className="flex flex-row items-center justify-start gap-[12px] text-white">
              <img
                className="relative w-6 h-6"
                alt=""
                src="/iconheadphone.svg"
              />
              <div className="relative">
                <span className="font-semibold">82,736,050</span>
                <span className="text-gray-600">
                  <span className="font-medium font-manrope">{` `}</span>
                  <span>monthly listeners</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[12px] text-white">
            <div className="rounded-21xl bg-forestgreen flex flex-row py-3 px-6 items-start justify-start">
              <b className="relative tracking-[0.04em]">PLAY</b>
            </div>
            <div className="rounded-21xl flex flex-row py-3 pr-6 pl-4 items-center justify-start gap-[10px] border-[1px] border-solid border-white">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/iconcheck.svg"
              />
              <b className="relative tracking-[0.04em]">FOLLOWING</b>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[55px] left-[671px] w-[429px] h-[363px] object-cover"
        alt=""
        src="/fococlipping202201202192-2@2x.png"
      />
      <b className="absolute top-[450px] left-[302px] text-xl text-white">
        Popular
      </b>
      <div className="absolute top-[454px] left-[1058px] font-semibold text-forestgreen text-right">
        See All
      </div>
      <div className="absolute top-[497px] left-[303px] flex flex-col items-end justify-center gap-[16px] text-white">
        <div className="relative w-[807px] h-[54px]">
          <b className="absolute top-[16px] left-[118px]">Shiver</b>
          <b className="absolute top-[16px] left-[0px] inline-block text-center w-6">
            1
          </b>
          <img
            className="absolute top-[0px] left-[48px] rounded-xl w-[54px] h-[54px] object-cover"
            alt=""
            src="/rectangle-6166@2x.png"
          />
          <div className="absolute top-[15px] left-[369px] flex flex-row items-center justify-start gap-[12px]">
            <img className="relative w-6 h-6" alt="" src="/iconheadphone.svg" />
            <b className="relative">460,228,511</b>
          </div>
          <div className="absolute top-[15px] left-[568px] flex flex-row items-center justify-start gap-[12px]">
            <img className="relative w-6 h-6" alt="" src="/iconclock.svg" />
            <b className="relative">3:27</b>
          </div>
          <img
            className="absolute h-[44.44%] w-[2.97%] top-[27.78%] right-[10.41%] bottom-[27.78%] left-[86.62%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/iconlike.svg"
          />
          <img
            className="absolute top-[15px] left-[783px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icondots.svg"
          />
        </div>
        <div className="relative box-border w-[760px] h-px border-t-[1px] border-solid border-dimgray" />
        <div className="relative w-[807px] h-[54px]">
          <b className="absolute top-[16px] left-[118px]">Perfect</b>
          <img
            className="absolute top-[15px] left-[0px] w-6 h-6"
            alt=""
            src="/iconplay2.svg"
          />
          <img
            className="absolute top-[0px] left-[48px] rounded-xl w-[54px] h-[54px] object-cover"
            alt=""
            src="/rectangle-61661@2x.png"
          />
          <div className="absolute top-[15px] left-[369px] flex flex-row items-center justify-start gap-[12px]">
            <img
              className="relative w-6 h-6"
              alt=""
              src="/iconheadphone1.svg"
            />
            <b className="relative">1,952,015,881</b>
          </div>
          <div className="absolute top-[15px] left-[568px] flex flex-row items-center justify-start gap-[12px]">
            <img className="relative w-6 h-6" alt="" src="/iconclock1.svg" />
            <b className="relative">4:23</b>
          </div>
          <img
            className="absolute h-[44.44%] w-[2.97%] top-[27.78%] right-[10.41%] bottom-[27.78%] left-[86.62%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/iconlike1.svg"
          />
          <img
            className="absolute top-[15px] left-[783px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icondots1.svg"
          />
        </div>
        <div className="relative box-border w-[760px] h-px border-t-[1px] border-solid border-dimgray" />
        <div className="relative w-[807px] h-[54px]">
          <b className="absolute top-[16px] left-[118px]">Bad Habits</b>
          <b className="absolute top-[16px] left-[0px] inline-block text-center w-6">
            3
          </b>
          <img
            className="absolute top-[0px] left-[48px] rounded-xl w-[54px] h-[54px] object-cover"
            alt=""
            src="/rectangle-6166@2x.png"
          />
          <div className="absolute top-[15px] left-[369px] flex flex-row items-center justify-start gap-[12px]">
            <img
              className="relative w-6 h-6"
              alt=""
              src="/iconheadphone2.svg"
            />
            <b className="relative">850,545,959</b>
          </div>
          <div className="absolute top-[15px] left-[568px] flex flex-row items-center justify-start gap-[12px]">
            <img className="relative w-6 h-6" alt="" src="/iconclock2.svg" />
            <b className="relative">3:50</b>
          </div>
          <img
            className="absolute h-[44.44%] w-[2.97%] top-[27.78%] right-[10.41%] bottom-[27.78%] left-[86.62%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/iconlike2.svg"
          />
          <img
            className="absolute top-[15px] left-[783px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icondots2.svg"
          />
        </div>
        <div className="relative box-border w-[760px] h-px border-t-[1px] border-solid border-dimgray" />
        <div className="relative w-[807px] h-[54px] text-forestgreen">
          <b className="absolute top-[16px] left-[118px]">Shape of You</b>
          <b className="absolute top-[16px] left-[0px] inline-block text-center w-6">
            4
          </b>
          <img
            className="absolute top-[0px] left-[48px] rounded-xl w-[54px] h-[54px] object-cover"
            alt=""
            src="/rectangle-61661@2x.png"
          />
          <div className="absolute top-[15px] left-[369px] flex flex-row items-center justify-start gap-[12px] text-white">
            <img
              className="relative w-6 h-6"
              alt=""
              src="/iconheadphone3.svg"
            />
            <b className="relative">3,024,067,930</b>
          </div>
          <div className="absolute top-[15px] left-[568px] flex flex-row items-center justify-start gap-[12px] text-white">
            <img className="relative w-6 h-6" alt="" src="/iconclock3.svg" />
            <b className="relative">3:53</b>
          </div>
          <img
            className="absolute h-[44.44%] w-[2.97%] top-[27.78%] right-[10.41%] bottom-[27.78%] left-[86.62%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/iconlike3.svg"
          />
          <img
            className="absolute top-[15px] left-[783px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icondots3.svg"
          />
        </div>
      </div>
      <div className="absolute top-[841px] left-[303px] flex flex-col items-start justify-start gap-[20px] text-xl text-white">
        <b className="relative">Popular Releases</b>
        <div className="relative w-[808px] h-[173px] text-sm">
          <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[16px]">
            <img
              className="relative rounded-xl w-[118px] h-[118px] object-cover"
              alt=""
              src="/rectangle-6162@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative font-semibold inline-block w-[118px]">
                Peru
              </div>
              <div className="relative text-xs text-gray-600 inline-block w-[118px]">
                Latest Releases • S..
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[138px] flex flex-col items-start justify-start gap-[16px]">
            <img
              className="relative rounded-xl w-[118px] h-[118px] object-cover"
              alt=""
              src="/rectangle-6163@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative font-semibold inline-block w-[118px]">
                =
              </div>
              <div className="relative text-xs text-gray-600 inline-block w-[118px]">
                2021 • Album
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[276px] flex flex-col items-start justify-start gap-[16px]">
            <img
              className="relative rounded-xl w-[118px] h-[118px] object-cover"
              alt=""
              src="/rectangle-6164@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative font-semibold inline-block w-[118px]">
                ÷ (Deluxe)
              </div>
              <div className="relative text-xs text-gray-600 inline-block w-[118px]">
                2017 • Album
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[414px] flex flex-col items-start justify-start gap-[16px]">
            <img
              className="relative rounded-lg w-[118px] h-[118px] object-cover"
              alt=""
              src="/rectangle-6165@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative font-semibold inline-block w-[118px]">
                x (Wembley Edit..
              </div>
              <div className="relative text-xs text-gray-600 inline-block w-[118px]">
                2015 • Album
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[552px] flex flex-col items-start justify-start gap-[16px]">
            <img
              className="relative rounded-xl w-[118px] h-[118px] object-cover"
              alt=""
              src="/rectangle-61662@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative font-semibold inline-block w-[118px]">
                No. 6 Collaborat..
              </div>
              <div className="relative text-xs text-gray-600 inline-block w-[118px]">
                2019 • Album
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[690px] flex flex-col items-start justify-start gap-[16px]">
            <img
              className="relative rounded-xl w-[118px] h-[118px] object-cover"
              alt=""
              src="/rectangle-6167@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative font-semibold inline-block w-[118px]">
                x (Delux Edition)
              </div>
              <div className="relative text-xs text-gray-600 inline-block w-[118px]">
                2014 • Album
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[449px] left-[1174px] flex flex-col items-start justify-start gap-[16px] text-lg text-white">
        <div className="relative w-[234px] h-[25px]">
          <b className="absolute top-[0px] left-[0px]">Recent Played</b>
          <div className="absolute top-[2px] left-[182px] text-base font-semibold text-forestgreen text-right">
            See All
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[20px] text-sm">
          <div className="w-[234px] flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="relative rounded-xl w-11 h-11 object-cover"
                alt=""
                src="/rectangle-61663@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <b className="relative">Perfect</b>
                <div className="relative text-xs text-gray-600">Ed Sheeran</div>
              </div>
            </div>
            <div className="relative text-xs">2min ago</div>
          </div>
          <div className="w-[234px] flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="relative rounded-xl w-11 h-11 object-cover"
                alt=""
                src="/rectangle-61664@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <b className="relative">Roman Picisan</b>
                <div className="relative text-xs text-gray-600">
                  Hanin Dhiya, Ah..
                </div>
              </div>
            </div>
            <div className="relative text-xs">8min ago</div>
          </div>
          <div className="w-[234px] flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="relative rounded-xl w-11 h-11 object-cover"
                alt=""
                src="/rectangle-61665@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <b className="relative">Title (Deluxe)</b>
                <div className="relative text-xs text-gray-600">
                  Meghan Trainor
                </div>
              </div>
            </div>
            <div className="relative text-xs">1hr ago</div>
          </div>
          <div className="w-[234px] flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="relative rounded-xl w-11 h-11 object-cover"
                alt=""
                src="/rectangle-61666@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <b className="relative">Shiver</b>
                <div className="relative text-xs text-gray-600">Ed Sheeran</div>
              </div>
            </div>
            <div className="relative text-xs">4hr ago</div>
          </div>
          <div className="w-[234px] flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="relative rounded-xl w-11 h-11 object-cover"
                alt=""
                src="/rectangle-61667@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <b className="relative">Feel Something</b>
                <div className="relative text-xs text-gray-600">
                  Jaymes Young
                </div>
              </div>
            </div>
            <div className="relative text-xs">5hr ago</div>
          </div>
          <div className="w-[234px] flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="relative rounded-xl w-11 h-11 object-cover"
                alt=""
                src="/rectangle-61663@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <b className="relative">Shape of You</b>
                <div className="relative text-xs text-gray-600">Ed Sheeran</div>
              </div>
            </div>
            <div className="relative text-xs">12hr ago</div>
          </div>
          <div className="w-[234px] flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="relative rounded-xl w-11 h-11 object-cover"
                alt=""
                src="/rectangle-61666@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <b className="relative">Bad Habits</b>
                <div className="relative text-xs text-gray-600">Ed Sheeran</div>
              </div>
            </div>
            <div className="relative text-xs">14hr ago</div>
          </div>
        </div>
      </div>
      <img
        className="absolute h-[2.34%] w-[1.67%] top-[91.8%] right-[2.22%] bottom-[5.86%] left-[96.11%] max-w-full overflow-hidden max-h-full opacity-[0.72]"
        alt=""
        src="/iconlike4.svg"
      />
      <div className="absolute top-[119px] left-[264px] rounded-tl-10xs rounded-tr-none rounded-br-none rounded-bl-10xs bg-forestgreen w-1.5 h-12" />
      <div className="absolute top-[122px] left-[1174px] flex flex-col items-start justify-start gap-[16px] text-lg text-white">
        <div className="relative w-[234px] h-[25px]">
          <b className="absolute top-[0px] left-[0px]">Fans Also Like</b>
          <div className="absolute top-[2px] left-[182px] text-base font-semibold text-forestgreen text-right">
            See All
          </div>
        </div>
        <div className="relative w-[234px] h-[254px] text-sm">
          <div className="absolute top-[0px] left-[0px] w-[234px] h-[234px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[234px] h-[234px] object-cover"
              alt=""
              src="/rectangle-6185@2x.png"
            />
            <div className="absolute top-[163px] left-[0px] w-[234px] h-[71px]">
              <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-b-xl bg-gray-500 [backdrop-filter:blur(74px)] w-[234px] h-[71px]" />
              <div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[4px]">
                <div className="relative font-semibold inline-block w-[118px]">
                  James Arthur
                </div>
                <div className="relative text-xs text-gray-600 inline-block w-[118px]">
                  Artist
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[246px] left-[89px] w-14 h-2"
            alt=""
            src="/group-27.svg"
          />
        </div>
      </div>
      <div className="absolute top-[912px] left-[0px] w-[1441px] h-28 text-right">
        <div className="absolute top-[0px] left-[0px] bg-gray-500 [backdrop-filter:blur(74px)] w-[1440px] h-28" />
        <div className="absolute top-[45px] left-[1119px]">1:45 / 4:42</div>
        <div className="absolute top-[44px] left-[1217px] flex flex-row items-start justify-start gap-[32px]">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <img
              className="relative w-6 h-6 opacity-[0.72]"
              alt=""
              src="/iconvolume.svg"
            />
            <div className="relative w-[99px] h-1">
              <div className="absolute top-[0px] left-[0px] rounded-2xl bg-dimgray w-[99px] h-1" />
              <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[77px] h-1" />
            </div>
          </div>
          <img
            className="relative w-6 h-6 opacity-[0.72]"
            alt=""
            src="/iconlirik.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1441px] h-1">
          <div className="absolute top-[0px] left-[1px] bg-dimgray w-[1440px] h-1" />
          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-white w-[581px] h-1" />
        </div>
        <div className="absolute top-[32px] left-[600px] flex flex-row items-center justify-start gap-[24px]">
          <img className="relative w-6 h-6" alt="" src="/iconshuffle.svg" />
          <img className="relative w-6 h-6" alt="" src="/iconprevious.svg" />
          <div className="rounded-21xl [background:linear-gradient(222.22deg,_#fff,_rgba(255,_255,_255,_0))] flex flex-row p-3 items-start justify-start">
            <img className="relative w-6 h-6" alt="" src="/iconpause.svg" />
          </div>
          <img className="relative w-6 h-6" alt="" src="/iconnext.svg" />
          <img className="relative w-6 h-6" alt="" src="/iconrepeate.svg" />
        </div>
        <div className="absolute top-[24px] left-[32px] flex flex-row items-center justify-start gap-[32px] text-left text-lg text-white">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
              className="relative rounded-xl w-16 h-16 object-cover"
              alt=""
              src="/rectangle-6150@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative font-semibold">Shape of You</div>
              <div className="relative text-sm text-gray-600">Ed Sheeran</div>
            </div>
          </div>
          <img
            className="relative w-6 h-6 opacity-[0.72]"
            alt=""
            src="/iconlike4.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicDashboard;
