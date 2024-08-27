# Maxima Online Shop Project
Maxima practice group 1

[![Netlify Status](https://api.netlify.com/api/v1/badges/0a0ee1af-a380-46e5-abd5-99aab274c3b7/deploy-status)](https://app.netlify.com/sites/mxm-practice/deploys)
[![ci](https://github.com/AnatoliyKlimov/Maxima-practice-1/actions/workflows/ci.yml/badge.svg)](https://github.com/AnatoliyKlimov/Maxima-practice-1/actions/workflows/ci.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/39dc073d91e24ea595dab0ba988dff4e)](https://app.codacy.com/gh/ivankprod/mxm-practice/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

## Стайлгайд
1. В целом по файлу .prettierrc
2. Имена компонентов в CamelCase, как и их файлы
	```javascript
	// ./MyComponent.tsx
	export const MyComponent: React.FC<IMyComponentProps> = (...)

	export default MyComponent;

	// ./MyComponent.module.css
	.myComponent {
	    display: block;
	}

	// ./index.ts
	export { default } from "./MyComponent";
	export * from "./MyComponent";
	```
3. Имена всего остального в lowerCamelCase, их файлы в kebab-case
	```javascript
	// ./lib/utils/some-util.ts
	export const someUtil = (...)

	// ./lib/utils/index.ts
	export * from "./some-util";
	```
3. Порядок импортов:
	- Импорты из react, next, etc...
		- Импортировать сам React без необходимости не нужно
	- (пустая строка)
	- Импорты из шрифтов
	- Импорты из компонентов
	- Импорты из lib/store/auth/etc...
	- (пустая строка)
	- Импорты типов
	- (пустая строка)
	- Импорты картинок
	- (пустая строка)
	- Локальные импорты (в текущей директории, напр. из "./style.css")
	```javascript
	// Пример
	import { useState } from "react";
	import Image from "next/image";

	import MyComponent from "@/components/MyComponent";

	import { MyType } from "@/types";

	import MyImage from "@/images/image.png";
	import MyImage2 from "@/images/image2.png";

	import styles from "./page.module.css";
	```
