import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent';
import { RspressPlugin } from '@rspress/shared';
import { GenericEvents } from '@newrelic/browser-agent/features/generic_events';
// const newrelic = require('@newrelic/browser-agent').addPageAction

const options = {
    init: {
        session_replay: {
            enabled: true,
            block_selector: '',
            mask_text_selector: '*',
            sampling_rate: 10.0,
            error_sampling_rate: 100.0,
            mask_all_inputs: true,
            collect_fonts: true,
            inline_images: false,
            inline_stylesheet: true,
            mask_input_options: {},
        },
        distributed_tracing: { enabled: true, exclude_newrelic_header: true },
        privacy: { cookies_enabled: true },
        ajax: { deny_list: ['bam.nr-data.net'] },
    },
    info: {
        beacon: 'bam.nr-data.net',
        errorBeacon: 'bam.nr-data.net',
        licenseKey: 'NRJS-36eb1aa0b0994558760',
        applicationID: '601487946',
        sa: 1,
    },
    loader_config: {
        accountID: '4141664',
        trustKey: '4141664',
        agentID: '601487946',
        licenseKey: 'NRJS-36eb1aa0b0994558760',
        applicationID: '601487946',
        page_view_timing: { enabled: true },
        session_trace: { enabled: true },
    },
    features: [GenericEvents],
};
export function NewRelicPlugin(): RspressPlugin {
    return {
        name: 'rspress:new-relic-plugin',
        async routeGenerated(routes, isProd) {
            if (isProd) {
                new BrowserAgent(options);
            }
        },
    };
}
