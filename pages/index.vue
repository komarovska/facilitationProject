<template>
    <div>
        <div class='container container-header'>
            <div class='row nav-menu'>

                <div class='nav-menu__items-big col-offset-lg-8 col-offset-xlg-8 col-offset-md-8 col-offset-sm-7 col-lg-6 col-xlg-6 col-md-7 col-sm-8'>
                    <div>
                        <a href='#section1'>О нас</a>
                    </div>
                    <div>
                        <a href="#section2">Услуги</a>
                    </div>
                    <div>
                        <a href='#section3'>Отзывы</a>
                    </div>
                    <div>
                        <a href='#section4'>Контакты</a>
                    </div>
                </div>
                <div id='small-shown' onclick='menuDrop(); linesRearrange()' onmouseover="linesRearrange()" onmouseout="linesReset()" class='nav-menu__items-small col-offset-xs-13 col-offset-xxs-13 col-offset-xxxs-12 col-xs-1'>
                    <div id="line1" class='nav-menu__items-small__line'></div>
                    <div class='nav-menu__items-small__line'></div>
                    <div id='line3' class='nav-menu__items-small__line'></div>
                </div>
                <div onclick='linesReset(); menuHide()' onmouseover="linesRearrange()" onmouseout="linesReset()" id='small-hidden' class='nav-menu__items-small col-offset-xs-13 col-offset-xxs-13 col-offset-xxxs-12 col-xs-1'>
                    <div id='line4' class='nav-menu__items-small__line'></div>
                    <div class='nav-menu__items-small__line'></div>
                    <div id='line5' class='nav-menu__items-small__line'></div>
                </div>

            </div>
            <div id='hidden-menu' class='row nav-menu_small'>
                <div id='item1' class='nav-menu_small__item'>
                    <a href='#section1'>О нас</a>
                </div>
                <div id='item2' class='nav-menu_small__item'>
                    <a href="#section2">Услуги</a>
                </div>
                <div id='item3' class='nav-menu_small__item'>
                    <a href='#section3'>Отзывы</a>
                </div>
                <div id='item4' class='nav-menu_small__item'>
                    <a href='#section4'>Контакты</a>
                </div>
            </div>
            <div class='row opening-page'>
                <div class='col-offset-xlg-2 col-xlg-6 col-offset-lg-2 col-lg-6 col-offset-md-1 col-md-9'>
                    <p class="opening-page__text_big">Не обязательно быть
                        <span>лучше всех</span>, достаточно быть лучше, чем ты был вчера.</p>
                    <p class="opening-page__text_small">Джо Фрейзер</p>
                </div>
            </div>
        </div>

        <div id='section1' class='container container-team'>
            <div class='row bridge'>
                <div class='bridge__phrase col-offset-xlg-5 col-xlg-6 col-offset-lg-5 col-lg-6 col-offset-sm-4 col-sm-8 col-offset-xs-3 col-xs-10'>
                    <h1>Наша команда</h1>
                    <div></div>
                    <p>
                        Все мы разные, но можем эффективно работать вместе.
                    </p>
                </div>
            </div>

            <div class='row team__members__pics'>
                <div class='col-offset-xlg-3 col-xlg-4 col-offset-lg-3 col-lg-4 col-offset-sm-1 col-sm-6 col-offset-xxs-2 col-xxs-12'>
                    <img src="img/image5.webp" alt="Вероника Комаровская">
                    <div class='team__members__pics_background'></div>
                    <div class='team__members__pics_inner'>

                        <div class='team__members__pics__description'>Вероника Комаровская</div>
                        <div class='team__members__pics__text'>Kандидат психологических наук, коуч, фасилитатор, практикующий тренер, руководитель управления обучения
                            и контроля. </div>
                        <div onclick='revealInfo()' onmouseout='hideInfo()' class='team__members__pics__btn'>Узнать больше</div>
                    </div>
                    <div id='overlay' class='team__members__pics__overlay'>
                        <div class='col-xlg-16 col-lg-16'>
                            <div onclick="hideInfo()" class="team__members__pics__overlay__close" title="hiding">&times;</div>
                            <span>Образование и пройденное обучение:
                                <br>
                            </span>
                            <span>•</span>«Фасилитация как инструмент тренера и руководителя» ("Живое дело", 2018 г.),
                            <br>
                            <span>•</span>«Эмоциональный интеллект руководителя» (Н. Романенко, 2017 г.).
                            <br>
                            <span>•</span>«Стратегия голубых океанов» (2016 г.)
                            <br>
                            <span>•</span> «Повышение эффективности отдела продаж» (Афанасьев, 2015 р.);
                            <br>
                            <span>•</span>«Методы партисипативной фасилитации «(Карпова Н., 2015 год),
                            <br>
                            <span>•</span> «Языковые конструкции при продаже товаров и услуг» (Азимов, 2013 год);
                            <br>
                            <span>•</span>«Личная эффективность руководителя», «Обратная связь и мотивация персонала» (Smart Time,
                            2012-2013 год);
                            <br>
                            <span>•</span>«Управление персоналом КЦ. Система качества» («Апекс-Берг Контакт-центр консалтинг»,
                            2012 год)
                            <br>
                            <span>•</span> «Мастерство презентаций и публичных выступлений», 2009 год
                            <br>
                            <span>•</span>«Управление людьми и мотивация», «Методы активных продаж» (InforManager, 2008 год);
                            <br>
                            <span>•</span>«Оценка при подборе персонала» и «Основы менеджмента: управление по целям» (Мейнстрим,
                            2007-2008 год)
                            <br>
                        </div>
                    </div>

                </div>

                <div class='col-offset-xlg-2 col-xlg-4 col-offset-lg-2 col-lg-4 col-offset-sm-2 col-sm-6 col-offset-xxs-2 col-xxs-12'>
                    <img src="img/svets.webp" alt="Светлана Тикунова">
                    <div class='team__members__pics_background'></div>
                    <div class='team__members__pics_inner'>

                        <div class='team__members__pics__description'>Светлана Тикунова</div>
                        <div class='team__members__pics__text'>Бизнес-тренер, фасилитатор, руководитель отдела обучения. 12 лет опыта работы в сфере обучения персонала
                            и руководящего состава Контакт-Центра.</div>
                    </div>
                    <div onclick='revealInfo2()' onmouseout='hideInfo2()' class='team__members__pics__btn'>Узнать больше</div>
                    <div id='overlay2' class='team__members__pics__overlay'>
                        <div class='col-xlg-16 col-lg-16'>
                            <div onclick="hideInfo2()" class="team__members__pics__overlay__close" title="hiding">&times;</div>
                            <span>Образование и пройденное обучение:</span>
                            <br>
                            <span>•</span>«Методы визуализации», И. Приходько, 2017
                            <br>
                            <span>•</span>«Клиенты на всю жизнь», Джон Шоул, 2016
                            <br>
                            <span>•</span>«Управление изменениями», Метт Кребтри, 2016
                            <br>
                            <span>•</span>«Управление групповой динамикой. Методы при работе с сопротивлениями, ситуациями, разногласиями»,
                            GoldenStaff, 2016
                            <br>
                            <span>•</span>«Управление отделом продаж», В. Касюн, 2016
                            <br>
                            <span>•</span>«ТоР Фасилитация. Методы и приемы», Н. Павлова, 2015
                            <br>
                            <span>•</span>«Спиральная динамика», С. Слипченко, 2015
                            <br>
                            <span>•</span>«HR-стратегии: неформальное обучение», 2015
                            <br>
                            <span>•</span>«Организация практики в бизнес-тренинге. Подходы и инструменты управления группой», GoldenStaff,
                            2014
                            <br>
                            <span>•</span>«Уверенный сервис. Экспертность и ассертивность», И. Бубнов, 2013
                            <br>
                            <span>•</span>«Управленческие навыки супервайзеров Контакт-Центра», ApexBerg, 2008
                            <br> Закончила НАУ по специальности «Психология», 2009
                            <br>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div id='section2' class='container container-services'>

            <div class='row services__title'>
                <div class='services__phrase col-offset-xlg-5 col-xlg-6 col-offset-lg-5 col-lg-6 col-offset-sm-4 col-sm-8'>
                    <h1>Услуги</h1>
                </div>
            </div>

            <div class='row services'>
                <div class='services__item col-offset-xlg-2 col-xlg-5 col-offset-lg-2 col-lg-5 col-offset-sm-1 col-sm-7 col-offset-xxs-1 col-xxs-14'>
                    <div class='services__item__title'>Фасилитация</div>
                    <img src='img/groupbig.webp' alt="Фасилитация">
                    <div class='services__item__description'>Фасилитация - это эффективный метод для группового поиска и принятия решений с высоким индексом ответственности
                        и вовлеченности каждого участника в процесс формирования идей и их реализации.
                    </div>
                    <div onclick="revealModal1()" class='services__item__btn'>Узнать больше</div>
                    <div id='id0' class='modal'>
                        <span onclick="hideModal()" class="close" title="Close Modal">&times;</span>
                        <div class='modal__content'>
                            <div class='row'>
                                <div class='col-xlg-14 col-offset-xlg-1 col-lg-14 col-offset-lg-1'>Мы можем создать условия и пространство для организации общего понимания и принятия решений,
                                    которые выведут ваше подразделение на качественно новый уровень, поскольку обеспечим
                                    вовлечённость сотрудников в процесс создания идей и готовность брать на себя ответственность
                                    за их реализацию. Базовые принципы фасилитации, которых мы строго придерживаемся, – вовлеченное
                                    участие, групповая работа, индивидуальность, общее решение, размышление, ориентация на
                                    действие.
                                </div>
                                <div class='col-offset-xlg-1 col-xlg-7 col-offset-lg-1 col-lg-7 col-offset-xxxs-1 col-xxxs-13'>
                                    <span>Когда нужна фасилитация?</span>
                                    <br>
                                    <span>•</span> Для вас важно повысить мотивацию персонала к формированию новых идей для улучшения
                                    качества существующих процессов или разработки новых;
                                    <br>
                                    <span>•</span> Вам необходимо вовлечь персонал в разработку новых процессов\процедур вплоть
                                    для разработки корпоративной культуры;
                                    <br>
                                    <span>•</span> Пришло время мобилизации большого количества сотрудников для решения определённых
                                    бизнес-задач в сжатые сроки;
                                    <br>
                                    <span>•</span> Важно преодолеть сопротивление персонала для внедрения изменений;
                                    <br>
                                    <span>•</span> Необходимо решить разногласия в коллективе и сформировать команду;
                                    <br>
                                    <span>•</span> Вы хотите повысить качество совещаний, встреч, стратегических сессий
                                    <br>

                                </div>
                                <div class='col-offset-xlg-1 col-xlg-7 col-offset-lg-1 col-lg-7 col-offset-xxxs-1 col-xxxs-13'>
                                    <p>Пригласите свой персонал для участия в фасилитационных сессиях. Для Вас - это возможность
                                        развития и распределения ответственности персонала за выработанные и принятые ими
                                        решения, что позволяет ускорить внедрение изменений в компании, подразделении и мотивировать
                                        персонал на их принятие.
                                        <br>
                                    </p>
                                    <span>Наша специализация:</span>
                                    <br> Проведение фасилитационных сессий – подготовка, проведение сессии. Дополнительно возможен
                                    вариант расширенного сопровождения - обработка результатов фасилитационной сессии, рекомендации
                                    по дальнейшей работе с принятыми на сессии решениями.
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class='services__item col-offset-xlg-2 col-xlg-5 col-offset-lg-2 col-lg-5 col-offset-sm-1 col-sm-7 col-offset-xxs-1 col-xxs-14'>
                    <div class='services__item__title'>Коучинг</div>
                    <img src='img/graph.webp' alt="Коучинг">
                    <div class='services__item__description'>Kоуч – человек, который обеспечит поддержку, понимание, уверенность в себе, прилив сил и желания действовать
                        на пути реализации задуманного, с кем успех точно придет и будет ощутимым.</div>
                    <div onclick="revealModal2()" class='services__item__btn'>Узнать больше</div>
                    <div id='id1' class='modal animate'>
                        <span onclick="hideModal()" class="close" title="Close Modal">&times;</span>
                        <div class='modal__content'>
                            <div class='row'>
                                <div class='col-xlg-14 col-offset-xlg-1 col-lg-14 col-offset-lg-1'>В каждом человеке заложены безграничные возможности и ресурсы для реализации целей. Однако
                                    мы не эффективны в общении с самим собой, в своем внутреннем диалоге, для достижения
                                    результата нужен
                                    <span>коуч</span> – человек, который обеспечит поддержку, понимание, уверенность в себе, прилив
                                    сил и желания действовать на пути реализации задуманного, с кем успех точно придет и
                                    будет ощутимым.</div>
                                <div class='col-offset-xlg-1 col-xlg-7 col-offset-lg-1 col-lg-7 col-offset-xxxs-1 col-xxxs-13'>
                                    <span>Наша специализация</span> – лайф-коучинг (коучинг энергии, карьерный коучинг, коучинг
                                    для молодых мам и родителей; коучинг по преобразованию жизни и т.д.)
                                </div>
                                <div class='col-offset-xlg-1 col-xlg-7 col-offset-lg-1 col-lg-7 col-offset-xxxs-1 col-xxxs-13'>
                                    <span>Когда необходим коучинг:</span>
                                    <br>
                                    <span>•</span>Вы разучились мечтать и не понимаете куда и как двигаться дальше;
                                    <br>
                                    <span>•</span>нужно оценить Вашу жизнь в целом и выделить зоны, требующие повышенного внимания;
                                    <br>
                                    <span>•</span>необходим толчок и поддержка для выхода из рамки проблемы в рамку результата;
                                    <br>
                                    <span>•</span>вам нужна помощь для преодоления ограничивающих убеждений;
                                    <br>
                                    <span>•</span>вы не понимаете, как сделать выбор и как оценить его последствия;
                                    <br>
                                    <span>•</span>нужна помощь в раскрытии вашего потенциала.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='services__item col-offset-xlg-2 col-xlg-5 col-offset-lg-2 col-lg-5 col-offset-sm-1 col-sm-7 col-offset-xxs-1 col-xxs-14'>
                    <div class='services__item__title'>Внешний мониторинг</div>
                    <img src='img/tick.webp' alt="Внешний мониторинг">
                    <div class='services__item__description'>Если вы все делаете правильно, но результат перестал приносить удовлетворение; если нужен свежий взгляд
                        на происходящее со стороны; если нужен внешний толчок для выхода из зоны комфорта – пришло время
                        для внешнего мониторинга процессов.
                    </div>
                    <div onclick="revealModal3()" class='services__item__btn'>Узнать больше</div>
                    <div id='id2' class='modal animate'>
                        <span onclick="hideModal()" class="close" title="Close Modal">&times;</span>
                        <div class='modal__content'>
                            <div class='row'>
                                <div class='col-xlg-7 col-offset-xlg-1 col-lg-7 col-offset-lg-1'>Если вы все делаете правильно, но результат перестал приносить удовлетворение; если нужен
                                    свежий взгляд на происходящее со стороны; если нужен внешний толчок для выхода из зоны
                                    комфорта – пришло время для
                                    <span>внешнего мониторинга процессов</span>.
                                </div>
                                <div class='col-xlg-7 col-offset-xlg-1 col-lg-7 col-offset-lg-1'>
                                    <p>В результате проведенного мониторинга Вы получаете:</p>
                                    <br>
                                    <span>•</span> диагностику текущего состояния процессов профессионалами с 15-ти летним опытом;
                                    <br>
                                    <span>•</span> выделение сильных сторон и зон роста;
                                    <br>
                                    <span>•</span> четкие рекомендации для изменения ситуации, в результате имплементации которых
                                    повышается эффективность обучения и контроля, как новых, так и текущих сотрудников, улучшается
                                    психологический климат в контакт-центре, повышается лояльность персонала (операторов,
                                    тренеров и контролеров).
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='services__item col-offset-xlg-2 col-xlg-5 col-offset-lg-2 col-lg-5 col-offset-sm-1 col-sm-7 col-offset-xxs-1 col-xxs-14'>
                    <div class='services__item__title'>Проведение стратегических сессий</div>
                    <img src='img/board.webp' alt="Проведение стратегических сессий">
                    <div class='services__item__description'>Стратегическая сессия - это формат групповой работы, в рамках которого команда работает над стратегией
                        развития: анализирует текущую ситуацию, прорабатывает разнообразные подходы и моделирует возможное
                        развитие стратегий в будущем.
                    </div>
                    <div onclick="revealModal4()" class='services__item__btn'>Узнать больше</div>
                    <div id='id3' class='modal animate'>
                        <span onclick="hideModal()" class="close" title="Close Modal">&times;</span>
                        <div class='modal__content'>
                            <div class='row'>
                                <div class='col-xlg-7 col-offset-xlg-1 col-lg-7 col-offset-lg-1'>
                                    <p>
                                        <span>Стратегическая сессия</span> - это инструмент построения четких целей в развитии
                                        компании/бизнеса на долгий период времени, который направлен на увеличение вовлеченности
                                        персонала и готовности брать на себя ответственность.
                                        <br>
                                    </p>
                                    Если Вы заботитесь о долговременном существовании своего бизнеса – регулярные страт.сессии должны стать неотъемлемой частью
                                    вашего рабочего процесса.
                                </div>
                                <div class='col-xlg-7 col-offset-xlg-1 col-lg-7 col-offset-lg-1'>
                                    <span>Когда нужна сессия?</span>
                                    <br>
                                    <span>•</span> Вы хотите провести анализ состояния компании и выработать решения стратегического
                                    характера;
                                    <br>
                                    <span>•</span> Вам нужна ясность в целях компании/бизнеса на 1 год и более;
                                    <br>
                                    <span>•</span> Нужен набор конкретных действий и ответственных за их реализацию;
                                    <br>
                                    <span>•</span> Хотите получить сплочённую команду, нацеленную на единый результат;
                                    <br>
                                    <span>•</span> Для вас важно сформировать у персонала единое понимание стратегии дальнейшего
                                    развития компании\бизнеса.
                                    <br>
                                    <span>•</span> Проработанные решения и планы.
                                    <br>
                                    <span>•</span> «Проникновение в массы» важной информации и идей
                                    <br>
                                    <span>•</span>Единое видение и командный дух.
                                    <br>
                                    <span>•</span>Новые идеи и альтернативные стратегии
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id='section3' class='clients__title'>Отзывы о нашей работе</div>
        <div class='container container-clients'>


            <div class='clients-slider'>
                <div class="mySlides fade">
                    <div class="text text_large">Было очень полезно обсудить в открытую многие вопросы, которые накопились у ребят. Плюс было полезно
                        подискутировать в плане реализации некоторых запросов на изменения. Получилось найти альтернативы
                        и расставить приоритеты. Спасибо за такой формат и качество работы.</div>
                </div>

                <div class="mySlides fade">
                    <div class="text text_small">Организовано на высоком уровне, было интересно, весело и непринужденно. Спасибо организаторам и участникам
                        - было круто!</div>
                </div>

                <div class="mySlides fade">
                    <div class="text text_medium">Спасибо за возможность проанализировать свое отношение к происходящему. Теперь я пониманию, как правильно
                        реагировать на очередную странную ситуацию и найти из нее выход.</div>
                </div>

                <div class="mySlides fade">
                    <div class="text text_small">Стратегическая сессия была организована на высоком уровне – все прошло слаженно, интересно, весело, непринужденно!
                        Спасибо организаторам, было круто!</div>
                </div>

                <div class="mySlides fade">
                    <div class="text text_small">Весело, увлекательно, а главное полезно и конструктивно. Все очень понравилось, результат превзошел ожидания.</div>
                </div>

                <div class="mySlides fade">
                    <div class="text text_medium">Спасибо за возможность развиваться, открывать в себе новые горизонты и достигать задуманного! Очень полезно
                        покопаться в себе и понять куда и как двигаться дальше!</div>
                </div>

                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>

        </div>
        <div class='wtf'>
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
            <span class="dot" onclick="currentSlide(5)"></span>
            <span class="dot" onclick="currentSlide(6)"></span>
        </div>

        <div class='container container-contacts' id='section4'>
            <p class='container-contacts__title'>
                Заинтересовала услуга?
                <br> Свяжитесь с нами и мы с радостью ответим на любые вопросы!
            </p>
            <div class='row'>
                <div class='container-contacts__numbers col-xlg-8 col-offset-xlg-4 col-lg-8 col-offset-lg-4'>
                    +380672485515
                    <br> +380672485421
                    <br> veronicakomarovskaya@gmail.com
                </div>

            </div>
        </div>
        <script src='/scripts/index.js'></script>
    </div>
</template>