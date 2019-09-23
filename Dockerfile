FROM ruby:2.6.2-stretch

ARG USER

ENV USER=ocho

RUN echo ${USER}

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

RUN gem install bundler:2.0.2

ENV APP_HOME /product-hub

RUN mkdir $APP_HOME

RUN useradd $USER

WORKDIR $APP_HOME

ADD Gemfile* $APP_HOME/
RUN bundle install

ADD . $APP_HOME

RUN chown -R ${USER}:${USER} ../$APP_HOME

EXPOSE 3000

USER ${USER}

CMD ["rails", "s"]
