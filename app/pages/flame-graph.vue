<template>
    <div class="flame-graph">
        <div class="flame-graph-container" ref="flameGraph" style="width: 800px; height: 500px"></div>
    </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { useDate } from '~/composables/useDate';
import { useLodash } from '~/composables/useLodash';
const { formatDate } = useDate();
const { deepClone } = useLodash();
// import { setAlpha } from '~/utils';


const data = ref([
    {
        name: 'GET:/projectA/{name}',
        traceId: 'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
        systemName: 'HTF',
        subSystemName: '',
        currentAddress: '192.168.1.202',
        spanId: 'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672884-0',
        parentSpanId: 'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672884--1',
        startTime: 1731255301467,
        endTime: '1731255314320',
        latency: 12853,
        isError: 1,
        nextErrNum: 0,
        isAlarm: 0,
        appName: 'projectA',
        parentAppName: '',
        methodName: 'GET:/projectA/{name}',
        tags: {
            'http.status_code': '500',
            'http.method': 'GET',
            url: 'http://localhost:8083/projectA/test',
        },
        logs: '[]',
        componentType: 'SpringMVC',
        errorNum: null,
        requestNum: null,
        latencyAvg: null,
        latencyMax: null,
        children: [
            {
                name: '/projectB/test',
                traceId: 'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                systemName: 'HTF',
                subSystemName: '',
                currentAddress: '192.168.1.202',
                spanId: 'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672884-1',
                parentSpanId: 'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672884-0',
                startTime: '1731255301467',
                endTime: '1731255304301',
                latency: 2834,
                isError: 0,
                nextErrNum: 0,
                isAlarm: 0,
                appName: 'projectA',
                parentAppName: '',
                methodName: '/projectB/test',
                tags: {
                    'http.status_code': '200',
                    'http.method': 'GET',
                    url: 'http://localhost:8082/projectB/test',
                },
                logs: '',
                componentType: 'OKHttp',
                errorNum: null,
                requestNum: null,
                latencyAvg: null,
                latencyMax: null,
                children: [
                    {
                        name: 'GET:/projectB/{value}',
                        traceId: 'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                        systemName: 'HTF',
                        subSystemName: '',
                        currentAddress: '192.168.1.202',
                        spanId: '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-0',
                        parentSpanId:
                            'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672884-1',
                        startTime: 1731255301468,
                        endTime: '1731255304301',
                        latency: 2833,
                        isError: 0,
                        nextErrNum: 0,
                        isAlarm: 0,
                        appName: 'projectB',
                        parentAppName: 'projectA',
                        methodName: 'GET:/projectB/{value}',
                        tags: {
                            'http.status_code': '200',
                            'http.method': 'GET',
                            url: 'http://localhost:8082/projectB/test',
                        },
                        logs: '',
                        componentType: 'SpringMVC',
                        errorNum: null,
                        requestNum: null,
                        latencyAvg: null,
                        latencyMax: null,
                        children: [
                            {
                                name: 'test.skywalking.springcloud.test.projectb.dao.DatabaseOperateDao.saveUser(java.lang.String)',
                                traceId:
                                    'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                systemName: 'HTF',
                                subSystemName: '',
                                currentAddress: '192.168.1.202',
                                spanId:
                                    '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-1',
                                parentSpanId:
                                    '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-0',
                                startTime: '1731255302469',
                                endTime: '1731255303296',
                                latency: 827,
                                isError: 0,
                                nextErrNum: 0,
                                isAlarm: 0,
                                appName: 'projectB',
                                parentAppName: 'projectA',
                                methodName:
                                    'test.skywalking.springcloud.test.projectb.dao.DatabaseOperateDao.saveUser(java.lang.String)',
                                tags: {
                                    'user.name': 'test',
                                },
                                logs: '',
                                componentType: 'Unknown',
                                errorNum: null,
                                requestNum: null,
                                latencyAvg: null,
                                latencyMax: null,
                                children: [
                                    {
                                        name: 'HikariCP/Connection/getConnection',
                                        traceId:
                                            'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                        systemName: 'HTF',
                                        subSystemName: '',
                                        currentAddress: '192.168.1.202',
                                        spanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-2',
                                        parentSpanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-1',
                                        startTime: '1731255302469',
                                        endTime: '1731255302471',
                                        latency: 2,
                                        isError: 0,
                                        nextErrNum: 0,
                                        isAlarm: 0,
                                        appName: 'projectB',
                                        parentAppName: 'projectA',
                                        methodName: 'HikariCP/Connection/getConnection',
                                        tags: {},
                                        logs: '',
                                        componentType: 'HikariCP',
                                        errorNum: null,
                                        requestNum: null,
                                        latencyAvg: null,
                                        latencyMax: null,
                                        children: [],
                                        color: 'rgba(21, 118, 109, 0.5)',
                                    },
                                    {
                                        name: 'H2/JDBI/PreparedStatement/execute',
                                        traceId:
                                            'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                        systemName: 'HTF',
                                        subSystemName: '',
                                        currentAddress: '192.168.1.202',
                                        spanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-3',
                                        parentSpanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-1',
                                        startTime: '1731255302471',
                                        endTime: '1731255303296',
                                        latency: 825,
                                        isError: 0,
                                        nextErrNum: 0,
                                        isAlarm: 0,
                                        appName: 'projectB',
                                        parentAppName: 'projectA',
                                        methodName: 'H2/JDBI/PreparedStatement/execute',
                                        tags: {
                                            'db.instance': 'test',
                                            'db.type': 'sql',
                                            'db.statement': 'INSERT INTO user(name) VALUES(?)',
                                        },
                                        logs: '',
                                        componentType: 'h2-jdbc-driver',
                                        errorNum: null,
                                        requestNum: null,
                                        latencyAvg: null,
                                        latencyMax: null,
                                        children: [],
                                        color: 'rgba(21, 118, 109, 0.5)',
                                    },
                                    {
                                        name: 'HikariCP/Connection/close',
                                        traceId:
                                            'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                        systemName: 'HTF',
                                        subSystemName: '',
                                        currentAddress: '192.168.1.202',
                                        spanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-4',
                                        parentSpanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-1',
                                        startTime: '1731255303296',
                                        endTime: '1731255303296',
                                        latency: 0,
                                        isError: 0,
                                        nextErrNum: 0,
                                        isAlarm: 0,
                                        appName: 'projectB',
                                        parentAppName: 'projectA',
                                        methodName: 'HikariCP/Connection/close',
                                        tags: {},
                                        logs: '',
                                        componentType: 'HikariCP',
                                        errorNum: null,
                                        requestNum: null,
                                        latencyAvg: null,
                                        latencyMax: null,
                                        children: [],
                                        color: 'rgba(21, 118, 109, 0.5)',
                                    },
                                ],
                                color: 'rgba(21, 118, 109, 0.5)',
                            },
                            {
                                name: 'selectUser',
                                traceId:
                                    'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                systemName: 'HTF',
                                subSystemName: '',
                                currentAddress: '192.168.1.202',
                                spanId:
                                    '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-5',
                                parentSpanId:
                                    '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-0',
                                startTime: '1731255303296',
                                endTime: '1731255303368',
                                latency: 72,
                                isError: 0,
                                nextErrNum: 0,
                                isAlarm: 0,
                                appName: 'projectB',
                                parentAppName: 'projectA',
                                methodName: 'selectUser',
                                tags: {
                                    'user.name': 'test',
                                },
                                logs: '',
                                componentType: 'Unknown',
                                errorNum: null,
                                requestNum: null,
                                latencyAvg: null,
                                latencyMax: null,
                                children: [
                                    {
                                        name: 'HikariCP/Connection/getConnection',
                                        traceId:
                                            'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                        systemName: 'HTF',
                                        subSystemName: '',
                                        currentAddress: '192.168.1.202',
                                        spanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-6',
                                        parentSpanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-5',
                                        startTime: '1731255303296',
                                        endTime: '1731255303296',
                                        latency: 0,
                                        isError: 0,
                                        nextErrNum: 0,
                                        isAlarm: 0,
                                        appName: 'projectB',
                                        parentAppName: 'projectA',
                                        methodName: 'HikariCP/Connection/getConnection',
                                        tags: {},
                                        logs: '',
                                        componentType: 'HikariCP',
                                        errorNum: null,
                                        requestNum: null,
                                        latencyAvg: null,
                                        latencyMax: null,
                                        children: [],
                                        color: 'rgba(21, 118, 109, 0.5)',
                                    },
                                    {
                                        name: 'H2/JDBI/PreparedStatement/execute',
                                        traceId:
                                            'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                        systemName: 'HTF',
                                        subSystemName: '',
                                        currentAddress: '192.168.1.202',
                                        spanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-7',
                                        parentSpanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-5',
                                        startTime: '1731255303296',
                                        endTime: '1731255303368',
                                        latency: 72,
                                        isError: 0,
                                        nextErrNum: 0,
                                        isAlarm: 0,
                                        appName: 'projectB',
                                        parentAppName: 'projectA',
                                        methodName: 'H2/JDBI/PreparedStatement/execute',
                                        tags: {
                                            'db.instance': 'test',
                                            'db.type': 'sql',
                                            'db.statement': 'SELECT * FROM user WHERE name =?',
                                        },
                                        logs: '',
                                        componentType: 'h2-jdbc-driver',
                                        errorNum: null,
                                        requestNum: null,
                                        latencyAvg: null,
                                        latencyMax: null,
                                        children: [],
                                        color: 'rgba(21, 118, 109, 0.5)',
                                    },
                                    {
                                        name: 'HikariCP/Connection/close',
                                        traceId:
                                            'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                        systemName: 'HTF',
                                        subSystemName: '',
                                        currentAddress: '192.168.1.202',
                                        spanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-8',
                                        parentSpanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-5',
                                        startTime: '1731255303368',
                                        endTime: '1731255303368',
                                        latency: 0,
                                        isError: 0,
                                        nextErrNum: 0,
                                        isAlarm: 0,
                                        appName: 'projectB',
                                        parentAppName: 'projectA',
                                        methodName: 'HikariCP/Connection/close',
                                        tags: {},
                                        logs: '',
                                        componentType: 'HikariCP',
                                        errorNum: null,
                                        requestNum: null,
                                        latencyAvg: null,
                                        latencyMax: null,
                                        children: [],
                                        color: 'rgba(21, 118, 109, 0.5)',
                                    },
                                ],
                                color: 'rgba(21, 118, 109, 0.5)',
                            },
                            {
                                name: '/projectB/interface1',
                                traceId:
                                    'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                systemName: 'HTF',
                                subSystemName: '',
                                currentAddress: '192.168.1.202',
                                spanId:
                                    '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-9',
                                parentSpanId:
                                    '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-0',
                                startTime: '1731255303369',
                                endTime: '1731255304300',
                                latency: 931,
                                isError: 0,
                                nextErrNum: 0,
                                isAlarm: 0,
                                appName: 'projectB',
                                parentAppName: 'projectA',
                                methodName: '/projectB/interface1',
                                tags: {
                                    'http.status_code': '200',
                                    'http.method': 'GET',
                                    url: 'http://localhost:8082/projectB/interface1',
                                },
                                logs: '',
                                componentType: 'OKHttp',
                                errorNum: null,
                                requestNum: null,
                                latencyAvg: null,
                                latencyMax: null,
                                children: [
                                    {
                                        name: 'GET:/projectB/interface1',
                                        traceId:
                                            'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                        systemName: 'HTF',
                                        subSystemName: '',
                                        currentAddress: '192.168.1.202',
                                        spanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.53.17312553033721302-0',
                                        parentSpanId:
                                            '4ef906f75c7149968bb4fe6df9d416d3.47.17312553014681318-9',
                                        startTime: '1731255303372',
                                        endTime: '1731255304300',
                                        latency: 928,
                                        isError: 0,
                                        nextErrNum: 0,
                                        isAlarm: 0,
                                        appName: 'projectB',
                                        parentAppName: 'projectB',
                                        methodName: 'GET:/projectB/interface1',
                                        tags: {
                                            'http.status_code': '200',
                                            'http.method': 'GET',
                                            url: 'http://localhost:8082/projectB/interface1',
                                        },
                                        logs: '',
                                        componentType: 'SpringMVC',
                                        errorNum: null,
                                        requestNum: null,
                                        latencyAvg: null,
                                        latencyMax: null,
                                        children: [],
                                        color: 'rgba(21, 118, 109, 0.5)',
                                    },
                                ],
                                color: 'rgba(21, 118, 109, 0.5)',
                            },
                        ],
                        color: 'rgba(21, 118, 109, 0.5)',
                    },
                ],
                color: 'rgba(53, 191, 10, 0.5)',
            },
            {
                name: '/projectC/test',
                traceId: 'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                systemName: 'HTF',
                subSystemName: '',
                currentAddress: '192.168.1.202',
                spanId: 'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672884-2',
                parentSpanId: 'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672884-0',
                startTime: '1731255304302',
                endTime: '1731255314309',
                latency: 10007,
                isError: 1,
                nextErrNum: 0,
                isAlarm: 0,
                appName: 'projectA',
                parentAppName: '',
                methodName: '/projectC/test',
                tags: {
                    'http.method': 'GET',
                    url: 'http://localhost:8081/projectC/test',
                },
                logs: '[]',
                componentType: 'OKHttp',
                errorNum: null,
                requestNum: null,
                latencyAvg: null,
                latencyMax: null,
                children: [
                    {
                        name: 'GET:/projectC/{value}',
                        traceId: 'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                        systemName: 'HTF',
                        subSystemName: '',
                        currentAddress: '192.168.1.202',
                        spanId: '71b12773050045159a0800a9f3ce327b.45.17312553043050662-0',
                        parentSpanId:
                            'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672884-2',
                        startTime: 1731255304305,
                        endTime: '1731255330200',
                        latency: 8195,
                        isError: 0,
                        nextErrNum: 0,
                        isAlarm: 0,
                        appName: 'projectC',
                        parentAppName: 'projectA',
                        methodName: 'GET:/projectC/{value}',
                        tags: {
                            'http.status_code': '200',
                            'http.method': 'GET',
                            url: 'http://localhost:8081/projectC/test',
                        },
                        logs: '',
                        componentType: 'SpringMVC',
                        errorNum: null,
                        requestNum: null,
                        latencyAvg: null,
                        latencyMax: null,
                        children: [
                            {
                                name: '/',
                                traceId:
                                    'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                systemName: 'HTF',
                                subSystemName: '',
                                currentAddress: '192.168.1.202',
                                spanId:
                                    '71b12773050045159a0800a9f3ce327b.45.17312553043050662-1',
                                parentSpanId:
                                    '71b12773050045159a0800a9f3ce327b.45.17312553043050662-0',
                                startTime: '1731255304307',
                                endTime: '1731255304311',
                                latency: 4,
                                isError: 0,
                                nextErrNum: 0,
                                isAlarm: 0,
                                appName: 'projectC',
                                parentAppName: 'projectA',
                                methodName: '/',
                                tags: {
                                    'http.status_code': '200',
                                    'http.method': 'GET',
                                    url: 'http://192.168.20.42:9200',
                                },
                                logs: '',
                                componentType: 'HttpClient',
                                errorNum: null,
                                requestNum: null,
                                latencyAvg: null,
                                latencyMax: null,
                                children: [],
                                color: 'rgba(0, 34, 158, 0.5)',
                            },
                            {
                                name: 'test.skywalking.springcloud.test.projectf.service.ServiceController.payment(java.lang.String)',
                                traceId:
                                    'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                systemName: 'HTF',
                                subSystemName: '',
                                currentAddress: '192.168.1.202',
                                spanId:
                                    '71b12773050045159a0800a9f3ce327b.45.17312553043050662-2',
                                parentSpanId:
                                    '71b12773050045159a0800a9f3ce327b.45.17312553043050662-0',
                                startTime: '1731255304311',
                                endTime: '1731255304394',
                                latency: 83,
                                isError: 0,
                                nextErrNum: 0,
                                isAlarm: 0,
                                appName: 'projectC',
                                parentAppName: 'projectA',
                                methodName:
                                    'test.skywalking.springcloud.test.projectf.service.ServiceController.payment(java.lang.String)',
                                tags: {
                                    'transaction.id': '6d19846a-7bfd-4ba7-9199-ea1c06c0538b',
                                },
                                logs: '',
                                componentType: 'Unknown',
                                errorNum: null,
                                requestNum: null,
                                latencyAvg: null,
                                latencyMax: null,
                                children: [
                                    {
                                        name: '/projectE/6d19846a-7bfd-4ba7-9199-ea1c06c0538b',
                                        traceId:
                                            'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                        systemName: 'HTF',
                                        subSystemName: '',
                                        currentAddress: '192.168.1.202',
                                        spanId:
                                            '71b12773050045159a0800a9f3ce327b.45.17312553043050662-3',
                                        parentSpanId:
                                            '71b12773050045159a0800a9f3ce327b.45.17312553043050662-2',
                                        startTime: '1731255304312',
                                        endTime: '1731255304394',
                                        latency: 82,
                                        isError: 0,
                                        nextErrNum: 0,
                                        isAlarm: 0,
                                        appName: 'projectC',
                                        parentAppName: 'projectA',
                                        methodName:
                                            '/projectE/6d19846a-7bfd-4ba7-9199-ea1c06c0538b',
                                        tags: {
                                            'http.status_code': '200',
                                            'http.method': 'GET',
                                            url: 'http://192.168.70.100:3000/projectE/6d19846a-7bfd-4ba7-9199-ea1c06c0538b',
                                        },
                                        logs: '',
                                        componentType: 'HttpClient',
                                        errorNum: null,
                                        requestNum: null,
                                        latencyAvg: null,
                                        latencyMax: null,
                                        children: [
                                            {
                                                name: 'GET:/projectE/{value}',
                                                traceId:
                                                    'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                                systemName: 'HTF',
                                                subSystemName: '',
                                                currentAddress: '192.168.1.202',
                                                spanId:
                                                    '8e509828ddaa4849aeed8d480739deb3.51.17312553043661530-0',
                                                parentSpanId:
                                                    '71b12773050045159a0800a9f3ce327b.45.17312553043050662-3',
                                                startTime: 1731255304366,
                                                endTime: '1731255304388',
                                                latency: 22,
                                                isError: 0,
                                                nextErrNum: 0,
                                                isAlarm: 0,
                                                appName: 'projectE1',
                                                parentAppName: 'projectC',
                                                methodName: 'GET:/projectE/{value}',
                                                tags: {
                                                    'http.status_code': '200',
                                                    'http.method': 'GET',
                                                    url: 'http://192.168.70.100:3000/projectE/6d19846a-7bfd-4ba7-9199-ea1c06c0538b',
                                                },
                                                logs: '',
                                                componentType: 'SpringMVC',
                                                errorNum: null,
                                                requestNum: null,
                                                latencyAvg: null,
                                                latencyMax: null,
                                                children: [
                                                    {
                                                        name: 'test.skywalking.springcloud.test.projectf.service.ServiceController.payment(java.lang.String,java.lang.String)',
                                                        traceId:
                                                            'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                                        systemName: 'HTF',
                                                        subSystemName: '',
                                                        currentAddress: '192.168.1.202',
                                                        spanId:
                                                            '8e509828ddaa4849aeed8d480739deb3.51.17312553043661530-1',
                                                        parentSpanId:
                                                            '8e509828ddaa4849aeed8d480739deb3.51.17312553043661530-0',
                                                        startTime: '1731255304377',
                                                        endTime: '1731255304388',
                                                        latency: 11,
                                                        isError: 0,
                                                        nextErrNum: 0,
                                                        isAlarm: 0,
                                                        appName: 'projectE1',
                                                        parentAppName: 'projectC',
                                                        methodName:
                                                            'test.skywalking.springcloud.test.projectf.service.ServiceController.payment(java.lang.String,java.lang.String)',
                                                        tags: {
                                                            'transaction.id':
                                                                '6d19846a-7bfd-4ba7-9199-ea1c06c0538b',
                                                            'transaction.code': 'payment',
                                                        },
                                                        logs: '',
                                                        componentType: 'Unknown',
                                                        errorNum: null,
                                                        requestNum: null,
                                                        latencyAvg: null,
                                                        latencyMax: null,
                                                        children: [
                                                            {
                                                                name: '/projectF/6d19846a-7bfd-4ba7-9199-ea1c06c0538b',
                                                                traceId:
                                                                    'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                                                systemName: 'HTF',
                                                                subSystemName: '',
                                                                currentAddress: '192.168.1.202',
                                                                spanId:
                                                                    '8e509828ddaa4849aeed8d480739deb3.51.17312553043661530-2',
                                                                parentSpanId:
                                                                    '8e509828ddaa4849aeed8d480739deb3.51.17312553043661530-1',
                                                                startTime: '1731255304377',
                                                                endTime: '1731255304387',
                                                                latency: 10,
                                                                isError: 1,
                                                                nextErrNum: 0,
                                                                isAlarm: 0,
                                                                appName: 'projectE1',
                                                                parentAppName: 'projectC',
                                                                methodName:
                                                                    '/projectF/6d19846a-7bfd-4ba7-9199-ea1c06c0538b',
                                                                tags: {
                                                                    'http.status_code': '500',
                                                                    'http.method': 'GET',
                                                                    url: 'http://localhost:9082/projectF/6d19846a-7bfd-4ba7-9199-ea1c06c0538b',
                                                                },
                                                                logs: '',
                                                                componentType: 'OKHttp',
                                                                errorNum: null,
                                                                requestNum: null,
                                                                latencyAvg: null,
                                                                latencyMax: null,
                                                                children: [
                                                                    {
                                                                        name: 'GET:/projectF/{value}',
                                                                        traceId:
                                                                            'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                                                        systemName: 'HTF',
                                                                        subSystemName: '',
                                                                        currentAddress: '192.168.1.202',
                                                                        spanId:
                                                                            'c4f1f3aa00c943e88af20b53a8dded50.49.17312553043811538-0',
                                                                        parentSpanId:
                                                                            '8e509828ddaa4849aeed8d480739deb3.51.17312553043661530-2',
                                                                        startTime: 1731255304381,
                                                                        endTime: '1731255304387',
                                                                        latency: 6,
                                                                        isError: 1,
                                                                        nextErrNum: 0,
                                                                        isAlarm: 0,
                                                                        appName: 'projectF',
                                                                        parentAppName: 'projectE1',
                                                                        methodName: 'GET:/projectF/{value}',
                                                                        tags: {
                                                                            'http.status_code': '500',
                                                                            'http.method': 'GET',
                                                                            url: 'http://localhost:9082/projectF/6d19846a-7bfd-4ba7-9199-ea1c06c0538b',
                                                                        },
                                                                        logs: '[]',
                                                                        componentType: 'SpringMVC',
                                                                        errorNum: null,
                                                                        requestNum: null,
                                                                        latencyAvg: null,
                                                                        latencyMax: null,
                                                                        children: [
                                                                            {
                                                                                name: 'test.skywalking.springcloud.test.projectf.service.ServiceController.payment(java.lang.String,java.lang.String)',
                                                                                traceId:
                                                                                    'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                                                                systemName: 'HTF',
                                                                                subSystemName: '',
                                                                                currentAddress: '192.168.1.202',
                                                                                spanId:
                                                                                    'c4f1f3aa00c943e88af20b53a8dded50.49.17312553043811538-1',
                                                                                parentSpanId:
                                                                                    'c4f1f3aa00c943e88af20b53a8dded50.49.17312553043811538-0',
                                                                                startTime: '1731255304382',
                                                                                endTime: '1731255304382',
                                                                                latency: 0,
                                                                                isError: 0,
                                                                                nextErrNum: 0,
                                                                                isAlarm: 0,
                                                                                appName: 'projectF',
                                                                                parentAppName: 'projectE1',
                                                                                methodName:
                                                                                    'test.skywalking.springcloud.test.projectf.service.ServiceController.payment(java.lang.String,java.lang.String)',
                                                                                tags: {
                                                                                    'transaction.id':
                                                                                        '6d19846a-7bfd-4ba7-9199-ea1c06c0538b',
                                                                                    'transaction.code': 'payment',
                                                                                },
                                                                                logs: '',
                                                                                componentType: 'Unknown',
                                                                                errorNum: null,
                                                                                requestNum: null,
                                                                                latencyAvg: null,
                                                                                latencyMax: null,
                                                                                children: [],
                                                                                color: 'rgba(60, 141, 67, 0.5)',
                                                                            },
                                                                        ],
                                                                        color: 'rgba(60, 141, 67, 0.5)',
                                                                    },
                                                                ],
                                                                color: 'rgba(63, 142, 29, 0.5)',
                                                            },
                                                        ],
                                                        color: 'rgba(63, 142, 29, 0.5)',
                                                    },
                                                ],
                                                color: 'rgba(63, 142, 29, 0.5)',
                                            },
                                        ],
                                        color: 'rgba(0, 34, 158, 0.5)',
                                    },
                                ],
                                color: 'rgba(0, 34, 158, 0.5)',
                            },
                            {
                                name: 'Kafka/test-trace-topic/Producer',
                                traceId:
                                    'dc41bbd33f9b4a11a29930cff18ee31a.52.17312553014672885',
                                systemName: 'HTF',
                                subSystemName: '',
                                currentAddress: '192.168.1.202',
                                spanId:
                                    '71b12773050045159a0800a9f3ce327b.45.17312553043050662-4',
                                parentSpanId:
                                    '71b12773050045159a0800a9f3ce327b.45.17312553043050662-0',
                                startTime: '1731255304398',
                                endTime: '1731255329946',
                                latency: 5548,
                                isError: 0,
                                nextErrNum: 0,
                                isAlarm: 0,
                                appName: 'projectC',
                                parentAppName: 'projectA',
                                methodName: 'Kafka/test-trace-topic/Producer',
                                tags: {
                                    'mq.topic': 'test-trace-topic',
                                    'mq.broker': '192.168.70.100:9092',
                                },
                                logs: '',
                                componentType: 'kafka-producer',
                                errorNum: null,
                                requestNum: null,
                                latencyAvg: null,
                                latencyMax: null,
                                children: [],
                                color: 'rgba(0, 34, 158, 0.5)',
                            },
                        ],
                        color: 'rgba(0, 34, 158, 0.5)',
                    },
                ],
                color: 'rgba(53, 191, 10, 0.5)',
            },
        ],
        color: 'rgba(53, 191, 10, 0.5)',
    },
]);

interface TreeNode {
    appName: string;
    children?: TreeNode[];
    [x: string]: any;
}

interface FlatNode extends TreeNode {
    level: number;
}

const chartData = ref<FlatNode[]>([]);

const maxTime = ref<number>(0);
const computedTime = ref(0);
const totalData = ref();

function flattenTreeWithLevels(
    tree: TreeNode[],
    level = 0,
    levelMap = new Map<number, FlatNode[]>()
): Map<number, FlatNode[]> {
    tree.forEach((node) => {
        node.computedStartTime =
            node.startTime - 0 - (totalData.value.startTime - 0);
        node.label = node.name;
        node.duration = node.latency;
        // Create a flat node with the level property
        const flatNode: FlatNode = { ...node, level };

        // Add the node to the map based on its level
        if (!levelMap.has(level)) {
            levelMap.set(level, []);
        }
        levelMap.get(level)?.push(flatNode);

        // If the node has children, flatten them recursively
        if (node.children && node.children.length > 0) {
            flattenTreeWithLevels(node.children, level + 1, levelMap);
        }
    });

    return levelMap;
}

const init = () => {
    if (Array.isArray(data.value)) {
        const topSpan:any = data.value[0];
        totalData.value = topSpan;
        const totalTime = Number(topSpan.latency);
        maxTime.value = totalTime;
        computedTime.value = totalTime;
        const cloneData = deepClone(data.value);
        const mapData = flattenTreeWithLevels(cloneData);
        const allElements = Array.from(mapData.values()).flat();
        chartData.value = allElements;
    }
};

const flameGraph = ref(null);
const chatRef = ref();

function getTextWidth(text:string, font = '12px sans-serif') {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
        context.font = font;
        return context.measureText(text).width;
    }
    return 0;
}

function trimTextToFit(text:string, maxWidth:number, font:string) {
    return text;
    let width = getTextWidth(text, font);
    if (width > maxWidth) {
        return text.substring(0, Math.floor(maxWidth / 8)) + '...';
    }
    return text;
}

function renderFlameGraphItem(params:any, api:any, seriesData:any[]) {
    const start = api.coord([api.value(0), api.value(1)]); // 获取每个柱子的起始位置
    const duration = api.size([api.value(2), 0]); // 计算柱子的宽度
    const labelPadding = 8; // 设置label和duration之间的间距

    const item = seriesData[params.dataIndex].data;

    const labelWidthLimit = 100;
    const durationLabelWidthLimit = 70;
    const font = '12px sans-serif';

    // 处理标签文本
    let labelText = trimTextToFit(item.label, labelWidthLimit, font);
    let durationLabelText = trimTextToFit(
        `${item.duration}ms`,
        durationLabelWidthLimit,
        font
    );

    // 获取调整后的宽度
    let labelWidth = getTextWidth(labelText, font);
    let durationLabelWidth = getTextWidth(durationLabelText, font);

    // 如果label的宽度超过duration的宽度，隐藏label
    if (labelWidth >= duration[0]) {
        labelWidth = 0;
        labelText = '';
    }

    if (durationLabelWidth >= duration[0]) {
        durationLabelWidth = 0;
        durationLabelText = '';
    }

    if (labelWidth + durationLabelWidth >= duration[0]) {
        labelWidth = 0;
        labelText = '';
        durationLabelWidth = 0;
        durationLabelText = '';
    }

    // 创建矩形柱子
    const rect = {
        type: 'rect',
        transition: ['shape'],
        shape: {
            x: start[0],
            y: start[1] - 10,
            width: duration[0],
            height: 20,
            r: 4,
        },
        style: {
            fill: item.color,
            stroke: '#333',
            lineWidth: 1,
            shadowColor: '#000',
        },
        emphasis: {
            style: {
                shadowColor: item.color,
                shadowBlur: 10,
                textFill: '#FFF',
                fill: setAlpha(item.color, 1),
            },
        },
    };

    // 创建左侧的 label
    const label = {
        type: 'text',
        position: [Math.max(start[0] + labelPadding, start[0]), start[1]],
        style: {
            text: labelText,
            fill: '#000',
            textAlign: 'left',
            textVerticalAlign: 'middle',
            fontSize: 12,
            width: labelWidth,
            overflow: 'hidden',
            ellipsis: true,
        },
        emphasis: {
            style: {
                textFill: '#FFF',
                fill: '#FFF',
            },
        },
    };

    // 创建右侧的 duration
    const durationLabel = {
        type: 'text',
        position: [
            start[0] + duration[0] - durationLabelWidth - labelPadding + 40,
            start[1],
        ],
        style: {
            text: durationLabelText,
            fill: '#000',
            textAlign: 'right',
            textVerticalAlign: 'middle',
            fontSize: 12,
            width: durationLabelWidth,
            overflow: 'hidden',
            ellipsis: true,
        },
        emphasis: {
            style: {
                textFill: '#FFF',
                fill: '#FFF',
            },
        },
    };

    // 返回包含矩形、label 和 duration 的 group
    return {
        type: 'group',
        children: [rect, label, durationLabel],
    };
}

// 重置
const resetAction = (instanceId?: string) => {
    if (!chatRef.value || chatRef.value.id === instanceId) {
        return;
    }
    chatRef.value.dispatchAction({
        type: 'dataZoom',
        start: 0,
        end: 100,
    });
};

const initChart = () => {
    const chart = echarts.init(flameGraph.value);
    chatRef.value = chart;
    nextTick(() => {
        const seriesData = chartData.value.map((item) => ({
            name: item.label,
            value: [item.computedStartTime, item.level, item.duration, item],
            itemStyle: { color: item.color },
            data: item,
            originalColor: item.color, // 保存原始颜色
        }));

        const option = {
            backgroundColor: '#FFFFFF', // 背景色
            grid: {
                left: '3%', // 设置左边距
                right: '5%', // 设置右边距
                top: 40, // 设置顶部边距
                bottom: '20%', // 设置底部边距
            },
            tooltip: {
                formatter: (params:any) => {
                    const { name, value, marker } = params;
                    console.log(params, 'params');
                    const item = value[3];
                    let startTime = item.startTime - 0;
                    const startTimeStr =formatDate(startTime, 'YYYY-MM-DD HH:mm:ss');
                    let html = `
          <div style="max-width: 300px;overflow:hidden;text-align:left">
            <div style="white-space: pre-wrap; font-weight: 700; word-wrap: break-all;overflow-wrap: break-word;"><span>${name}</span></div>
            <div>${marker}服务名称： ${item.appName}；</div>
            <div>${marker}开始时间： ${startTimeStr}；</div>
            <div>${marker}持续时间： ${item.latency}ms；</div>
          </div>
          `;
                    return html;
                },
            },
            xAxis: {
                type: 'value',
                min: 0,
                max: maxTime.value + 100, // 根据数据调整最大值
                // name: '时间 (ms)',
                position: 'top', // 时间轴在顶部
                // splitLine: { show: false },
            },
            yAxis: {
                show: false,
                type: 'category',
                data: Array.from(new Set(chartData.value.map((item) => item.level))),
                // axisLabel: { formatter: (value) => `层 ${value}` },
                // inverse: true,
            },
            series: [
                {
                    type: 'custom',
                    renderItem: (params:any, api:any) =>
                        renderFlameGraphItem(params, api, seriesData),
                    clip: true,
                    data: seriesData,
                },
            ],
            dataZoom: [
                {
                    type: 'inside',
                    xAxisIndex: 0,
                    filterMode: 'none',
                    zoomOnMouseWheel: true, // 启用滚轮缩放
                },
                {
                    type: 'slider', // 可拖动的缩放滑块
                    xAxisIndex: 0,
                    filterMode: 'none',
                },
            ],
        };

        chart.setOption(option);
    });

    // 双击事件监听
    chatRef.value.getZr().on('dblclick', () => {
        resetAction();
    });

    // 自动调整图表大小
    window.addEventListener('resize', () => chart.resize());
};

onMounted(() => {
    init();
    initChart();
});
</script>

<style scoped>
.flame-graph {
    background: linear-gradient(45deg, red, yellow);
    height: 100vh;
    width: 100vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.flame-graph-container {
    margin-top: 10px;
    width: 800px;
    height: 500px;
    background-color: #ffffff;
}
</style>