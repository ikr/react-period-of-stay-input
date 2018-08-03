/* tslint:disable:max-line-length */

export default `:global .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, :global .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, :global .react-datepicker__year-read-view--down-arrow, :global .react-datepicker__month-read-view--down-arrow, :global .react-datepicker__month-year-read-view--down-arrow {
  margin-left: -8px;
  position: absolute;
}

:global .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, :global .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, :global .react-datepicker__year-read-view--down-arrow, :global .react-datepicker__month-read-view--down-arrow, :global .react-datepicker__month-year-read-view--down-arrow, :global .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, :global .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, :global .react-datepicker__year-read-view--down-arrow::before, :global .react-datepicker__month-read-view--down-arrow::before, :global .react-datepicker__month-year-read-view--down-arrow::before {
  box-sizing: content-box;
  position: absolute;
  border: 8px solid transparent;
  height: 0;
  width: 1px;
}

:global .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, :global .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, :global .react-datepicker__year-read-view--down-arrow::before, :global .react-datepicker__month-read-view--down-arrow::before, :global .react-datepicker__month-year-read-view--down-arrow::before {
  content: "";
  z-index: -1;
  border-width: 8px;
  left: -8px;
  border-bottom-color: #aeaeae;
}

:global .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
  top: 0;
  margin-top: -8px;
}

:global .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, :global .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
  border-top: none;
  border-bottom-color: #f0f0f0;
}

:global .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
  top: -1px;
  border-bottom-color: #aeaeae;
}

:global .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, :global .react-datepicker__year-read-view--down-arrow, :global .react-datepicker__month-read-view--down-arrow, :global .react-datepicker__month-year-read-view--down-arrow {
  bottom: 0;
  margin-bottom: -8px;
}

:global .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, :global .react-datepicker__year-read-view--down-arrow, :global .react-datepicker__month-read-view--down-arrow, :global .react-datepicker__month-year-read-view--down-arrow, :global .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, :global .react-datepicker__year-read-view--down-arrow::before, :global .react-datepicker__month-read-view--down-arrow::before, :global .react-datepicker__month-year-read-view--down-arrow::before {
  border-bottom: none;
  border-top-color: #fff;
}

:global .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, :global .react-datepicker__year-read-view--down-arrow::before, :global .react-datepicker__month-read-view--down-arrow::before, :global .react-datepicker__month-year-read-view--down-arrow::before {
  bottom: -1px;
  border-top-color: #aeaeae;
}

:global .react-datepicker-wrapper {
  display: inline-block;
}

:global .react-datepicker {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  display: inline-block;
  position: relative;
}

:global .react-datepicker--time-only .react-datepicker__triangle {
  left: 35px;
}

:global .react-datepicker--time-only .react-datepicker__time-container {
  border-left: 0;
}

:global .react-datepicker--time-only .react-datepicker__time {
  border-radius: 0.3rem;
}

:global .react-datepicker--time-only .react-datepicker__time-box {
  border-radius: 0.3rem;
}

:global .react-datepicker__triangle {
  position: absolute;
  left: 50px;
}

:global .react-datepicker-popper {
  z-index: 1;
}

:global .react-datepicker-popper[data-placement^="bottom"] {
  margin-top: 10px;
}

:global .react-datepicker-popper[data-placement^="top"] {
  margin-bottom: 10px;
}

:global .react-datepicker-popper[data-placement^="right"] {
  margin-left: 8px;
}

:global .react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {
  left: auto;
  right: 42px;
}

:global .react-datepicker-popper[data-placement^="left"] {
  margin-right: 8px;
}

:global .react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
  left: 42px;
  right: auto;
}

:global .react-datepicker__header {
  text-align: center;
  background-color: #f0f0f0;
  border-bottom: 1px solid #aeaeae;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  padding-top: 8px;
  position: relative;
}

:global .react-datepicker__header--time {
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

:global .react-datepicker__year-dropdown-container--select,
:global .react-datepicker__month-dropdown-container--select,
:global .react-datepicker__month-year-dropdown-container--select,
:global .react-datepicker__year-dropdown-container--scroll,
:global .react-datepicker__month-dropdown-container--scroll,
:global .react-datepicker__month-year-dropdown-container--scroll {
  display: inline-block;
  margin: 0 2px;
}

:global .react-datepicker__current-month,
:global .react-datepicker-time__header {
  margin-top: 0;
  color: #000;
  font-weight: bold;
  font-size: 0.944rem;
}

:global .react-datepicker-time__header {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

:global .react-datepicker__navigation {
  background: none;
  line-height: 1.7rem;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 10px;
  width: 0;
  padding: 0;
  border: 0.45rem solid transparent;
  z-index: 1;
}

:global .react-datepicker__navigation--previous {
  left: 10px;
  border-right-color: #ccc;
}

:global .react-datepicker__navigation--previous:hover {
  border-right-color: #b3b3b3;
}

:global .react-datepicker__navigation--previous--disabled, :global .react-datepicker__navigation--previous--disabled:hover {
  border-right-color: #e6e6e6;
  cursor: default;
}

:global .react-datepicker__navigation--next {
  right: 10px;
  border-left-color: #ccc;
}

:global .react-datepicker__navigation--next--with-time:not(:global .react-datepicker__navigation--next--with-today-button) {
  right: 80px;
}

:global .react-datepicker__navigation--next:hover {
  border-left-color: #b3b3b3;
}

:global .react-datepicker__navigation--next--disabled, :global .react-datepicker__navigation--next--disabled:hover {
  border-left-color: #e6e6e6;
  cursor: default;
}

:global .react-datepicker__navigation--years {
  position: relative;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

:global .react-datepicker__navigation--years-previous {
  top: 4px;
  border-top-color: #ccc;
}

:global .react-datepicker__navigation--years-previous:hover {
  border-top-color: #b3b3b3;
}

:global .react-datepicker__navigation--years-upcoming {
  top: -4px;
  border-bottom-color: #ccc;
}

:global .react-datepicker__navigation--years-upcoming:hover {
  border-bottom-color: #b3b3b3;
}

:global .react-datepicker__month-container {
  float: left;
}

:global .react-datepicker__month {
  margin: 0.4rem;
  text-align: center;
}

:global .react-datepicker__time-container {
  float: right;
  border-left: 1px solid #aeaeae;
  width: 70px;
}

:global .react-datepicker__time-container--with-today-button {
  display: inline;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  position: absolute;
  right: -72px;
  top: 0;
}

:global .react-datepicker__time-container .react-datepicker__time {
  position: relative;
  background: white;
}

:global .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
  width: 70px;
  overflow-x: hidden;
  margin: 0 auto;
  text-align: center;
}

:global .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
  list-style: none;
  margin: 0;
  height: calc(195px + (1.7rem / 2));
  overflow-y: scroll;
  padding-right: 30px;
  width: 100%;
  box-sizing: content-box;
}

:global .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
  padding: 5px 10px;
}

:global .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
  cursor: pointer;
  background-color: #f0f0f0;
}

:global .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
  background-color: #216ba5;
  color: white;
  font-weight: bold;
}

:global .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
  background-color: #216ba5;
}

:global .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {
  color: #ccc;
}

:global .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {
  cursor: default;
  background-color: transparent;
}

:global .react-datepicker__week-number {
  color: #ccc;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}

:global .react-datepicker__week-number.react-datepicker__week-number--clickable {
  cursor: pointer;
}

:global .react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}

:global .react-datepicker__day-names,
:global .react-datepicker__week {
  white-space: nowrap;
}

:global .react-datepicker__day-name,
:global .react-datepicker__day,
:global .react-datepicker__time-name {
  color: #000;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}

:global .react-datepicker__day {
  cursor: pointer;
}

:global .react-datepicker__day:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}

:global .react-datepicker__day--today {
  font-weight: bold;
}

:global .react-datepicker__day--highlighted {
  border-radius: 0.3rem;
  background-color: #3dcc4a;
  color: #fff;
}

:global .react-datepicker__day--highlighted:hover {
  background-color: #32be3f;
}

:global .react-datepicker__day--highlighted-custom-1 {
  color: magenta;
}

:global .react-datepicker__day--highlighted-custom-2 {
  color: green;
}

:global .react-datepicker__day--selected, :global .react-datepicker__day--in-selecting-range, :global .react-datepicker__day--in-range {
  border-radius: 0.3rem;
  background-color: #216ba5;
  color: #fff;
}

:global .react-datepicker__day--selected:hover, :global .react-datepicker__day--in-selecting-range:hover, :global .react-datepicker__day--in-range:hover {
  background-color: #1d5d90;
}

:global .react-datepicker__day--keyboard-selected {
  border-radius: 0.3rem;
  background-color: #2a87d0;
  color: #fff;
}

:global .react-datepicker__day--keyboard-selected:hover {
  background-color: #1d5d90;
}

:global .react-datepicker__day--in-selecting-range:not(:global .react-datepicker__day--in-range) {
  background-color: rgba(33, 107, 165, 0.5);
}

.react-datepicker__month--selecting-range :global .react-datepicker__day--in-range:not(:global .react-datepicker__day--in-selecting-range) {
  background-color: #f0f0f0;
  color: #000;
}

:global .react-datepicker__day--disabled {
  cursor: default;
  color: #ccc;
}

:global .react-datepicker__day--disabled:hover {
  background-color: transparent;
}

:global .react-datepicker__input-container {
  position: relative;
  display: inline-block;
}

:global .react-datepicker__year-read-view,
:global .react-datepicker__month-read-view,
:global .react-datepicker__month-year-read-view {
  border: 1px solid transparent;
  border-radius: 0.3rem;
}

:global .react-datepicker__year-read-view:hover,
:global .react-datepicker__month-read-view:hover,
:global .react-datepicker__month-year-read-view:hover {
  cursor: pointer;
}

:global .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,
:global .react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,
:global .react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,
:global .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,
:global .react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,
:global .react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {
  border-top-color: #b3b3b3;
}

:global .react-datepicker__year-read-view--down-arrow,
:global .react-datepicker__month-read-view--down-arrow,
:global .react-datepicker__month-year-read-view--down-arrow {
  border-top-color: #ccc;
  float: right;
  margin-left: 20px;
  top: 8px;
  position: relative;
  border-width: 0.45rem;
}

:global .react-datepicker__year-dropdown,
:global .react-datepicker__month-dropdown,
:global .react-datepicker__month-year-dropdown {
  background-color: #f0f0f0;
  position: absolute;
  width: 50%;
  left: 25%;
  top: 30px;
  z-index: 1;
  text-align: center;
  border-radius: 0.3rem;
  border: 1px solid #aeaeae;
}

:global .react-datepicker__year-dropdown:hover,
:global .react-datepicker__month-dropdown:hover,
:global .react-datepicker__month-year-dropdown:hover {
  cursor: pointer;
}

:global .react-datepicker__year-dropdown--scrollable,
:global .react-datepicker__month-dropdown--scrollable,
:global .react-datepicker__month-year-dropdown--scrollable {
  height: 150px;
  overflow-y: scroll;
}

:global .react-datepicker__year-option,
:global .react-datepicker__month-option,
:global .react-datepicker__month-year-option {
  line-height: 20px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

:global .react-datepicker__year-option:first-of-type,
:global .react-datepicker__month-option:first-of-type,
:global .react-datepicker__month-year-option:first-of-type {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}

:global .react-datepicker__year-option:last-of-type,
:global .react-datepicker__month-option:last-of-type,
:global .react-datepicker__month-year-option:last-of-type {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

:global .react-datepicker__year-option:hover,
:global .react-datepicker__month-option:hover,
:global .react-datepicker__month-year-option:hover {
  background-color: #ccc;
}

:global .react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,
:global .react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,
:global .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {
  border-bottom-color: #b3b3b3;
}

:global .react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,
:global .react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,
:global .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {
  border-top-color: #b3b3b3;
}

:global .react-datepicker__year-option--selected,
:global .react-datepicker__month-option--selected,
:global .react-datepicker__month-year-option--selected {
  position: absolute;
  left: 15px;
}

:global .react-datepicker__close-icon {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: inline-block;
  height: 0;
  outline: 0;
  padding: 0;
  vertical-align: middle;
}

:global .react-datepicker__close-icon::after {
  background-color: #216ba5;
  border-radius: 50%;
  bottom: 0;
  box-sizing: border-box;
  color: #fff;
  content: "\00d7";
  cursor: pointer;
  font-size: 12px;
  height: 16px;
  width: 16px;
  line-height: 1;
  margin: -8px auto 0;
  padding: 2px;
  position: absolute;
  right: 7px;
  text-align: center;
  top: 50%;
}

:global .react-datepicker__today-button {
  background: #f0f0f0;
  border-top: 1px solid #aeaeae;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  padding: 5px 0;
  clear: left;
}

:global .react-datepicker__portal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 2147483647;
}

:global .react-datepicker__portal .react-datepicker__day-name,
:global .react-datepicker__portal .react-datepicker__day,
:global .react-datepicker__portal .react-datepicker__time-name {
  width: 3rem;
  line-height: 3rem;
}

@media (max-width: 400px), (max-height: 550px) {
  :global .react-datepicker__portal .react-datepicker__day-name,
  :global .react-datepicker__portal .react-datepicker__day,
  :global .react-datepicker__portal .react-datepicker__time-name {
    width: 2rem;
    line-height: 2rem;
  }
}

:global .react-datepicker__portal .react-datepicker__current-month,
:global .react-datepicker__portal .react-datepicker-time__header {
  font-size: 1.44rem;
}

:global .react-datepicker__portal .react-datepicker__navigation {
  border: 0.81rem solid transparent;
}

:global .react-datepicker__portal .react-datepicker__navigation--previous {
  border-right-color: #ccc;
}

:global .react-datepicker__portal .react-datepicker__navigation--previous:hover {
  border-right-color: #b3b3b3;
}

:global .react-datepicker__portal .react-datepicker__navigation--previous--disabled, :global .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {
  border-right-color: #e6e6e6;
  cursor: default;
}

:global .react-datepicker__portal .react-datepicker__navigation--next {
  border-left-color: #ccc;
}

:global .react-datepicker__portal .react-datepicker__navigation--next:hover {
  border-left-color: #b3b3b3;
}

:global .react-datepicker__portal .react-datepicker__navigation--next--disabled, :global .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {
  border-left-color: #e6e6e6;
  cursor: default;
}
`
