import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageListReLoading } from "../Atom/Atoms";
import { navList } from "../Atom/NavList";
import { OnNav } from "../Atom/Atoms";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
	// https://developer.mozilla.org/ko/docs/Web/API/Document/scroll_event 스크롤 이벤트 참조
	let last_scroll_position = 0;
	let working = false;

	const [changing, setChanging] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	const page_re_loading = useSetRecoilState(pageListReLoading); // 값만 변경
	const [focusPath, setFocusPath] = useRecoilState(OnNav); // useState와 같으나 다른 파일에 있는 값 읽기

	const scrollView = (scroll_position) => {
		if (scroll_position >= 10) {
			setChanging(true);
			setScrolling(true);
		} else {
			setChanging(false);
			setScrolling(false);
		}
	};

	window.addEventListener("scroll", (e) => {
		last_scroll_position = window.scrollY;

		if (!working) {
			window.requestAnimationFrame(() => {
				scrollView(last_scroll_position);
				working = false;
			});

			working = true;
		}
	});

	const MouseMove = () => {
		if (scrolling) return;
		setChanging((current) => !current);
	};

	const pageReLoad = () => {
		page_re_loading(true);
	};

	return (
		<div>
			<nav
				onMouseOver={MouseMove}
				onMouseOut={MouseMove}
				style={
					changing
						? {
								backgroundColor: "#845EC2",
								boxShadow:
									"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
						  }
						: { backgroundColor: "transparent" }
				}
				className={styles.nav__container}
			>
				<div className={styles.nav__title}>
					<Link to="/" onClick={() => setFocusPath("")}>
						<strong> HOME </strong>
					</Link>
				</div>
				<ul className={styles.nav__list}>
					{navList.map(({ title, path, id }) => (
						<li key={id}>
							<Link
								to={`/page/${path}/1`}
								onClick={focusPath !== path ? pageReLoad : null}
								style={focusPath !== path ? null : { color: "#dc0ff" }}
							>
								{title}
							</Link>
						</li>
					))}
				</ul>
				{/* 검색 기능 추가 */}
			</nav>
			<div className={styles.empty__box}></div>
		</div>
	);
}

// 스크롤을 할 때  nav바 상단 고정 및 색상 변경
// 스크롤 안할 대 마우스오버 시 nav바 색상 변경
// 홈으로 이동하는 메인로고 (제일 좌측)
// 인기영화 > 최신영화 > 애니메이션 > 추천영화 (Atom NavList)
// search 검색창
export default Nav;
